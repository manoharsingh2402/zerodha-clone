import React from 'react';

function Hero() {
    return ( 
        <div className="container" style={{color:"#424242",lineHeight:"1.8"}}>
            <div className="row border-bottom"> 
                <h1 className="text-center mt-5 fs-3">Charges</h1> 
                <h3 className="text-center text-muted fs-4 mb-5">List of all charges and taxes</h3> 
            </div>  

            <div className="row mb-5 p-4"> 
                <div className="col-4 ml-5 p-4 text-center"> 
                    <img src='media/images/pricingEquity.svg' alt='Prcing-Equity' style={{width:"80%"}}/> 
                    <h1 className='fs-3 mb-4'>Free equity delivery</h1> 
                    <p className='mb-3 text-muted fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>  

                <div className="col-4 ml-5 p-4 text-center"> 
                    <img src='media/images/intradayTrades.svg' alt='Prcing-Equity' style={{width:"80%"}}/> 
                    <h1 className='fs-3 mb-4'>Intraday and F&O trades</h1> 
                    <p className='mb-3 text-muted fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div> 

                <div className="col-4 ml-5 p-4 text-center"> 
                    <img src='media/images/pricingEquity.svg' alt='Prcing-Equity' style={{width:"80%"}}/> 
                    <h1 className='fs-3 mb-4'>Free direct MF</h1> 
                    <p className='mb-3 text-muted fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div> 
            </div>
        </div> 
     );
}

export default Hero;  