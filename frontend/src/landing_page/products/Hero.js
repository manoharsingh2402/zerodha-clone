import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 border-bottom' style={{color:"#424242"}}> 
             <div className='text-center mt-5 p-3'> 
                <h1 style={{fontSize:"28px"}}> 
                    Zerodha Products
                </h1> 
                <h3 className='text-center mt-3' style={{fontSize:"21px"}}> 
                    Sleek, modern, and intuitive trading platforms
                </h3> 
                <p className='text-center mt-3 mb-5' style={{fontSize:"17px"}}>
                    Check out our <a href='' className='text-decoration-none'> investment offerings <i className="fa fa-long-arrow-right"></i></a>
                </p>
             </div>
        </div>
    );
}

export default Hero;