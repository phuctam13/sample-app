import React from 'react';
import Image from 'next/image';

const Card = ({imgsrc, title, price, description}) =>{
    return(
        <div className='card'>
            <div>
                <Image src={imgsrc} width={'400px'} height={'200px'} />
            </div>
            <div className='card-inside'>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
                <div>
                    <p>
                        {price}
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Card;