// import React,{useEffect,useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';  
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//  import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Badge } from '@mui/material';
// import './cardicon.css';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';


// import { getCart } from '../../actions/cart.actions';
// import { getCarttwo } from '../../actions/carttwo.actions';
// import { updateCartWithUserInfo } from '../../actions/carttwo.actions';

// import { styled } from '@mui/material/styles';


// function CartIcon() {

//     const [modalOpen, setModalOpen] = useState(false);

//     const dispatch = useDispatch();

//     const itemCount = useSelector(state => state.carttwo.itemCount); 
//     const total = useSelector (state=>state.cart.total)
//     const carttwo=useSelector(state=>state.carttwo.carttwo)

//     const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);

  
  
//     const handleOpenUserInfoModal = () => {
//       setUserInfoModalOpen(true);
//     };
  
//     const handleCloseUserInfoModal = () => {
//       setUserInfoModalOpen(false);
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();  
//       event.stopPropagation();  
//       await dispatch(updateCartWithUserInfo(cartId, userInfo)); 
//       handleCloseModal();
//       handleOpenUserInfoModal(); 
//     };
    


//     console.log('yamen',itemCount)

//     const handleOpenModal = () => {
//       dispatch(getCarttwo());
//       setModalOpen(true);
//     };
    
//       const handleCloseModal = () => {
//         setModalOpen(false);
//       };

     


//     useEffect(() => {
//         console.log('Cart items:', itemCount); 
//     }, [itemCount]);

//     useEffect(() => {
//         console.log('wiem:', carttwo); 
//     }, [carttwo]);

//     useEffect(() => {
//         console.log('wiemtotal:', total); 
//     }, [total]);

//     const modalStyle = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 350,
//         bgcolor: '#1D8D7F',
//         borderRadius: '30px',
//         boxShadow: 24,
//         p: 4,
//         color: '#FFF',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 2,
//       };
//       const StyledBadge = styled(Badge)(({ theme }) => ({
//         '& .MuiBadge-badge': {
//           backgroundColor: '#ffd700', 
//           color: 'black',
         
//           width: '10px',
//           height: '10px',
          
//           fontSize: '0.5rem',
//         },
//       }));

//       const [userInfo, setUserInfo] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         phoneNumber: '',
//         message: ''
//       });
    
     
//       const handleUserInfoChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({ ...userInfo, [name]: value });
//       };
    
    
    
      
//     return (

//         <>
//         <div className="cart-icon-fixed"  onClick={handleOpenModal} >
//         <StyledBadge badgeContent={itemCount} >
//           <ShoppingCartIcon style={{ color: '#24a295', fontSize: 25 }} />
//         </StyledBadge>

//         </div>
//         <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         aria-labelledby="cart-modal-title"
//         aria-describedby="cart-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <Typography id="cart-modal-title" variant="h6" component="h2">
//             Panier
//           </Typography>
//           <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
//   {carttwo?.items?.map((item) => (
//     <ListItem key={item._id} alignItems="flex-start">
//       <ListItemText primary={`${item.product.name}  x ${item.quantity}`} />
//     </ListItem>
//   ))}
// </List>

        
//           {/* <Typography>Total: {cart?.total || '0'}</Typography> */}
//           <Box component="form" onClick={handleOpenUserInfoModal} sx={{ width: '100%' }}>
     
//             <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//               Demande Devis
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       <Modal open={userInfoModalOpen} onClose={handleCloseUserInfoModal}>
//       <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
//             <Typography id="cart-modal-title" variant="h6" component="h2">
//               Panier
//             </Typography>
//             <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto'}}>
//               {carttwo?.items?.map((item) => (
//                 <ListItem key={item._id} alignItems="flex-start">
//                   <ListItemText primary={`${item.product.name}  x ${item.quantity}`} />
//                 </ListItem>
//               ))}
//             </List>
//             <TextField
//               fullWidth
//               label="Nom"
//               variant="outlined"
//               name="name"
//               value={userInfo.name}
//               onChange={handleUserInfoChange}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Prénom"
//               variant="outlined"
//               name="surname"
//               value={userInfo.surname}
//               onChange={handleUserInfoChange}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               name="email"
//               value={userInfo.email}
//               onChange={handleUserInfoChange}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Numéro de téléphone"
//               variant="outlined"
//               name="phoneNumber"
//               value={userInfo.phoneNumber}
//               onChange={handleUserInfoChange}
//               sx={{ mt: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Message"
//               variant="outlined"
//               name="message"
//               multiline
//               rows={4}
//               value={userInfo.message}
//               onChange={handleUserInfoChange}
//               sx={{ mt: 2 }}
//             />
//            <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: 'primary.main' }}>
//               Demande Devis
//             </Button>
//           </Box>


//       </Modal>


//         </>
//     );
// }

// export default CartIcon;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Badge, List, ListItem, ListItemText, styled } from '@mui/material';
import './cardicon.css';
import { getCarttwo, updateCartWithUserInfo } from '../../actions/carttwo.actions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';import AssignmentIcon from '@mui/icons-material/Assignment';
import SendIcon from '@mui/icons-material/Send';
import { removeItemFromCart,updateItemQuantity } from '../../actions/carttwo.actions'; 

function CartIcon() {
    const [modalOpen, setModalOpen] = useState(false);
    const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const dispatch = useDispatch();
    const itemCount = useSelector(state => state.carttwo.itemCount);
    const carttwo = useSelector(state => state.carttwo.carttwo);
    
    useEffect(() => {
        console.log('Cart items:', itemCount);
    }, [itemCount]);

    const handleOpenModal = () => {
        dispatch(getCarttwo());
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenUserInfoModal = () => {
        setUserInfoModalOpen(true);
    };

    const handleCloseUserInfoModal = () => {
        setUserInfoModalOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cartId = carttwo._id;  // Assurez-vous que vous avez l'ID du panier
        try {
            await dispatch(updateCartWithUserInfo(cartId, userInfo));
            handleCloseModal();
            handleOpenUserInfoModal();
        } catch (error) {
            console.error('Failed to update cart:', error);
        }
    };

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      bgcolor: '#f1f1f1',
      borderRadius: '30px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Ombre plus douce avec dispersion
      p: 4,
      color: '#FFF',
      fontfamily: 'cursive',
    
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      overflow: 'hidden', // Assure que rien ne dépasse de la boîte arrondie
      border: '1px solid rgba(255, 255, 255, 0.2)' // Bordure subtile pour un effet de profondeur
  };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#ffd700', 
            color: 'black',
            width: '10px',
            height: '20px',
            fontSize: '0.8rem',
            transform:'translateY(-60%)',
            right: '-18px', // Décale le badge de 10 pixels vers la droite
           
        },
    }));

   


    const [itemQuantities, setItemQuantities] = useState({});
    useEffect(() => {
        if (carttwo && carttwo.items) {
            const initialQuantities = {};
            carttwo.items.forEach(item => {
                initialQuantities[item._id] = item.quantity;
            });
            setItemQuantities(initialQuantities);
        }
    }, [carttwo]);

    const handleIncreaseQuantity = (itemId) => {
      const newQuantity = itemQuantities[itemId] + 1;
      setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
      dispatch(updateItemQuantity(carttwo._id, itemId, newQuantity));
  };

  const handleDecreaseQuantity = (itemId) => {
      if (itemQuantities[itemId] > 1) {
          const newQuantity = itemQuantities[itemId] - 1;
          setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
          dispatch(updateItemQuantity(carttwo._id, itemId, newQuantity));
      } else {
          const newItems = { ...itemQuantities };
          delete newItems[itemId];
          setItemQuantities(newItems);
          dispatch(removeItemFromCart(carttwo._id, itemId));
      }
  };



    return (
        <>
            <div className="cart-icon-fixed" onClick={handleOpenModal}>
                <StyledBadge badgeContent={itemCount}>
                    <LocalMallOutlinedIcon style={{ color: '#24a295', fontSize: 25 }} />
                </StyledBadge>
            </div>
            <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="cart-modal-title" aria-describedby="cart-modal-description">
            <Box sx={modalStyle}>
            <Typography 
                            id="cart-modal-title" 
                            variant="h6" 
                            component="h2" 
                            className="goldenCursiveText"
                        >
                            Panier
                        </Typography>

                <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
                    {Object.keys(itemQuantities).map(itemId => (
                        <ListItem key={itemId} alignItems="flex-start">
                            <ListItemText primary={`${carttwo.items.find(item => item._id === itemId).product.name} x ${itemQuantities[itemId]}`} />
                            <IconButton onClick={() => handleIncreaseQuantity(itemId)}><ControlPointIcon sx={{color:'#11A592'}}/></IconButton>
                            <IconButton onClick={() => handleDecreaseQuantity(itemId) }><DoDisturbOnOutlinedIcon sx={{color:'#ce9d29'}}/></IconButton>
                            <IconButton><HighlightOffIcon sx={{color:'red'}}/></IconButton>
                        </ListItem>
                    ))}
                </List>

                <Button onClick={handleOpenUserInfoModal} variant="contained"  sx={{
                            mt: 2,
                            backgroundColor: '#fbfbfb', // Couleur de fond
                            color: '#ce9d29', // Couleur du texte
                            // border: '2px solid #11A592', // Bordure
                            fontSize: '15px', 
                            borderRadius: '20px',// Taille de la police
                            '&:hover': { // Styles pour l'état hover
                            backgroundColor: '#ce9d29', // Changement de la couleur de fond au survol
                            color: '#fbfbfb' // Changement de la couleur du texte au survol
                            }
                        }}>Devis <AssignmentIcon sx={{ ml: 1 }} /> </Button>
            </Box>

            </Modal>
            <Modal open={userInfoModalOpen} onClose={handleCloseUserInfoModal}>
                <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
                <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
                        {carttwo?.items?.map((item) => (
                            <ListItem key={item._id} alignItems="flex-start">
                                <ListItemText primary={`${item.product.name} x ${item.quantity}`} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography id="cart-modal-title" variant="h6" component="h2" sx={{color:'gray'}}>Informations utilisateur</Typography>
                    <TextField label="Nom" variant="outlined" name="name" value={userInfo.name} onChange={handleUserInfoChange} fullWidth sx={{ mt: 2 }} />
                    <TextField label="Prénom" variant="outlined" name="surname" value={userInfo.surname} onChange={handleUserInfoChange} fullWidth sx={{ mt: 2 }} />
                    <TextField label="Email" variant="outlined" name="email" value={userInfo.email} onChange={handleUserInfoChange} fullWidth sx={{ mt: 2 }} />
                    <TextField label="Numéro de téléphone" variant="outlined" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleUserInfoChange} fullWidth sx={{ mt: 2 }} />
                    <TextField label="Message" variant="outlined" name="message" multiline rows={4} value={userInfo.message} onChange={handleUserInfoChange} fullWidth sx={{ mt: 2 }} />
                    <Button type="submit" variant="contained" sx={{
                                            mt: 2,
                                            backgroundColor: '#fbfbfb', // Couleur de fond
                                            color: '#ce9d29', // Couleur du texte
                                            // border: '2px solid #ce9d29',
                                            fontSize: '15px', 
                                            borderRadius: '20px',// Taille de la police
                                            '&:hover': { // Styles pour l'état hover
                                            backgroundColor: '#ce9d29', // Changement de la couleur de fond au survol
                                            color: '#fbfbfb' // Changement de la couleur du texte au survol
                                            }
                                        }}> Envoyer <SendIcon sx={{ ml: 1 }} />
                                        </Button>
                </Box>
            </Modal>
        </>
    );
}

export default CartIcon;
