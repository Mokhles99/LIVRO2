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
    console.log("Dispatching UPDATE_CARTTWO_REQUEST"); // Log when dispatching
    dispatch({ type: carttwoConstants.UPDATE_CARTTWO_REQUEST });

    try {
        console.log("Sending PUT request to server", `Cart ID: ${cartId}`, "User Info:", userInfo); // Log the request details
        const response = await fetch(`http://localhost:8080/carttwo/${cartId}/userinfo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInfo })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Check if response is ok
        }

        const data = await response.json();
        console.log("Received response from server:", data); // Log the response data
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error in updating cart with user info:", error); // Log any errors
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_FAILURE, payload: error.message });
    }
};

export const removeItemFromCart = (cartId, itemId) => async (dispatch) => {
    dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_REQUEST });
    try {
        const response = await fetch(`http://localhost:8080/carttwo/${cartId}/items/${itemId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Failed to delete the item: status ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_SUCCESS, payload: data });
        console.log("Item removed successfully:", data);
    } catch (error) {
        console.error("Error in removing item from cart:", error);
        dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message });
    }
};
export const updateItemQuantity = (cartId, itemId, quantity) => async (dispatch) => {
    dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_REQUEST });
    try {
        const response = await fetch(`http://localhost:8080/carttwo/${cartId}/items/${itemId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity })
        });
        if (!response.ok) {
            throw new Error(`Failed to update item quantity: status ${response.status}`);
        }
        const updatedCart = await response.json();
        dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_SUCCESS, payload: updatedCart });
    } catch (error) {
        dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_FAILURE, payload: error.message });
    }
};




