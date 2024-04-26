import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import './cardicon.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import { getCart } from '../../actions/cart.actions';
import { getCarttwo } from '../../actions/carttwo.actions';
import { updateCartWithUserInfo } from '../../actions/carttwo.actions';

import { styled } from '@mui/material/styles';


function CartIcon() {

    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    

 
    const itemCount = useSelector(state => state.carttwo.itemCount); 
    const total = useSelector (state=>state.cart.total)
    const carttwo=useSelector(state=>state.carttwo.carttwo)

    const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);

    // ... autres states et fonctions ...
  
    const handleOpenUserInfoModal = () => {
      setUserInfoModalOpen(true);
    };
  
    const handleCloseUserInfoModal = () => {
      setUserInfoModalOpen(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Dispatch l'action avec userInfo
      dispatch(updateCartWithUserInfo(cartId, userInfo));
      // Après la soumission, ouvrez la nouvelle modal
      handleOpenUserInfoModal();
    };


    console.log('yamen',itemCount)

    const handleOpenModal = () => {
      dispatch(getCarttwo());
      setModalOpen(true);
    };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };

     


    useEffect(() => {
        console.log('Cart items:', itemCount); 
    }, [itemCount]);

    useEffect(() => {
        console.log('wiem:', carttwo); 
    }, [carttwo]);

    useEffect(() => {
        console.log('wiemtotal:', total); 
    }, [total]);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: '#1D8D7F',
        borderRadius: '30px',
        boxShadow: 24,
        p: 4,
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      };
      const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#ffd700', 
          color: 'black',
         
          width: '10px',
          height: '10px',
          
          fontSize: '0.5rem',
        },
      }));




      const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    
      // Fonction pour mettre à jour le state avec les valeurs du formulaire
      const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
    
    
    
      
    return (

        <>
        <div className="cart-icon-fixed"  onClick={handleOpenModal} >
        <StyledBadge badgeContent={itemCount} >
          <ShoppingCartIcon style={{ color: '#24a295', fontSize: 25 }} />
        </StyledBadge>

        </div>
        <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="cart-modal-title" variant="h6" component="h2">
            Panier
          </Typography>
          <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
  {carttwo?.items?.map((item) => (
    <ListItem key={item._id} alignItems="flex-start">
      <ListItemText primary={`${item.product.name}  x ${item.quantity}`} />
    </ListItem>
  ))}
</List>

        
          {/* <Typography>Total: {cart?.total || '0'}</Typography> */}
          <Box component="form" onClick={handleOpenUserInfoModal} sx={{ width: '100%' }}>
     
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Demande Devis
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={userInfoModalOpen} onClose={handleCloseUserInfoModal}>
        <Box sx={modalStyle}>
          <Typography id="user-info-modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Votre demande de devis a été envoyée. Nous vous contacterons bientôt !
          </Typography>
          <Button onClick={handleCloseUserInfoModal} sx={{ mt: 2 }}>
            Fermer
          </Button>
        </Box>
      </Modal>


        </>
    );
}

export default CartIcon;
