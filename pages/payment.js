import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Image from 'next/image';

const Payment = () =>{
    return(
        <div className='payment-container'>
            Payment page HALLO HALLO
            <div>
                <AccessibilityNewIcon/>
                test
            </div>
            <Image src={"/images/bowman.png"} height={"50px"} width={"50px"}/>
            <span>
                test
            </span>
        </div>
    );
}
export default Payment;