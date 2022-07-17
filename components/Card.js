import React from 'react';
import Image from 'next/image';

const Card = () =>{
    return(
        <div className='card-container'>
            <div>
                <Image src={"/images/bowman.png"} height={"50px"} width={"50px"}/>
            </div>
            <div>
                <div>
                    PC 
                </div>
                <div>
                    sehr guter pc
                </div>
                <div>
                    3k
                </div>
            </div>
        </div>
    );
}
export default Card;