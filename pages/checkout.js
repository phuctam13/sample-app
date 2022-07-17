import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Image from 'next/image';
import {Button} from '@mui/material';
import { useRouter } from 'next/router';
import Card from '../components/Card';

const Checkout = () =>{
    const router = useRouter()
    return(
        <div>
            <div className='checkout-container'>
                Checkout page asdasd asda
                <div>
                    <AccessibilityNewIcon/>
                    <Button type="button" onClick={() => router.push('/payment')}>
                        Einkaufswagen
                    </Button>
                </div>
                <Image src={"/images/bowman.png"} height={"50px"} width={"50px"}/>
                <span>
                    test
                </span>
            </div>
            <div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
        
    );
}
export default Checkout;