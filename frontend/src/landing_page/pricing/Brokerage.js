import React from 'react';

function Brokerage() {
    return ( 
        <div className="container" style={{color:"#424242",lineHeight:"1.8"}}>
            <div className="row"> 
                <div className='col-6 text-center'>
                    <a className="text-center text-decoration-none fs-4 mb-5">Brokerage calculator</a> 
                </div>  
                <div className='col-6 text-center'>
                    <a className="text-center text-decoration-none fs-4 mb-5">Charges explained</a> 
                </div>                
            </div>  

            <div className="row " style={{fontSize:"13px"}}> 
                <div className="col-6 ml-3 p-5">
                    <ul>
                        <li className='mb-3'>
                            Call & Trade and RMS auto squaredoff: Additional charges of &#8377;50 + GST per order.
                        </li>
                        <li className='mb-3'>
                            Digital contract notes will be sent by email.
                        </li>
                        <li className='mb-3'>
                            Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.
                        </li>
                        <li className='mb-3'>
                            For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for equity (whichever is low).
                        </li>
                        <li className='mb-3'>
                            For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is low).
                        </li>
                        <li className='mb-3'>
                            If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.
                        </li>
                    </ul>
                </div>  
                <div className="col-6 ml-5 mt-5"> 
                  
                    <p className='fs-6'>Securities/Commodities transaction tax</p>

                    <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                    <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <p className='fs-6'>GST</p>

                    <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                    <p className='fs-6'>SEBI Charges</p>

                    <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                </div> 

            </div>
        </div> 
     );
}

export default Brokerage;