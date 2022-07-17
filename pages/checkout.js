import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Checkout = () =>{
    return(
        <div className='checkout-container'>
            Checkout page
            <div>
                <ShoppingCartIcon/>
                Einkaufswagen
            </div>
        </div>
        
    );
}
export default Checkout;