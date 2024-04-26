import {carttwoConstants} from  './constantes';

export const addToCarttwo = (productId, quantity) => async (dispatch) => {
    console.log('Sending to server:', { productId, quantity });
    dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_REQUEST });
    try {
        const response = await fetch('http://localhost:8080/carttwo/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity })
        });
        const data = await response.json();
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_FAILURE, payload: error.message });
    }
};
export const getCarttwo = () => async (dispatch) => {
    dispatch({ type: carttwoConstants.GET_CARTTWO_REQUEST });
    try {
        const response = await fetch('http://localhost:8080/carttwo/getCarttwo');
        const data = await response.json();
        dispatch({ type: carttwoConstants.GET_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: carttwoConstants.GET_CARTTWO_FAILURE, payload: error.message });
    }
};

export const updateCartWithUserInfo = (cartId, userInfo) => async (dispatch) => {
    dispatch({ type: carttwoConstants.UPDATE_CARTTWO_REQUEST });
    try {
        const response = await fetch(`http://localhost:8080/carttwo/${cartId}/userinfo`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInfo })
        });
        const data = await response.json();
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_FAILURE, payload: error.message });
    }
};

