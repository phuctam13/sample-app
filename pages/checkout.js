import React, { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Card from '../components/Card';
import { useState } from 'react';

const Checkout = () =>{
    const router = useRouter()
    const axios = require('axios').default;
    const [productList, setProductList] = useState(null);

    useEffect(() => { 
        axios.get('/api/hello')
                    .then(function (response) {
                        // handle success
                        setProductList(response.data.products);
                        console.log("asd", productList);
                    }).catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
    }, [])

    return(
        <div>
            <div className='checkout-container'>
            Checkout page
            {console.log('Hallo')}
                <div>
                    <ShoppingCartIcon/>
                    <Button type="button" onClick={() => router.push('/payment')}>
                        Einkaufswagen
                    </Button>
                    {/* <Button href="localhost:3000/payment">Einkaufswagen</Button> */}
                </div>
            </div>
            <div>
                {!!productList && productList.map((item) => {
                    return(
                        <Card key={item.id} imgsrc={item.srcImage} title={item.title} description={'Sehr gut'} price={item.price}></Card>
                    )
                })}
            </div>
        </div>
        
        
    );
}
export default Checkout;