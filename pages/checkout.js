import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Card from '../components/Card';

const Checkout = () =>{
    const router = useRouter()

    return(
        <div>
            <div className='checkout-container'>
            Checkout page
                <div>
                    <ShoppingCartIcon/>
                    <Button type="button" onClick={() => router.push('/payment')}>
                        Einkaufswagen
                    </Button>
                    {/* <Button href="localhost:3000/payment">Einkaufswagen</Button> */}
                </div>
            </div>
            <div>
                <Card imgsrc={'/images/tv.jpg'} title={'LG TV'} description={'Sehr guter TV'} price={'€3000,00'}></Card>
                <Card imgsrc={'/images/tv.jpg'} title={'LG TV'} description={'Sehr guter TV'} price={'€2000,00'}></Card>
                <Card imgsrc={'/images/tv.jpg'} title={'LG TV'} description={'Sehr guter TV'} price={'€1000,00'}></Card>
            </div>
        </div>
        
        
    );
}
export default Checkout;