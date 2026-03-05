import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="" id="supportWrapper"> 
                <h5 className="p-5">
                    Support Portal
                </h5> 
                <a href="" className='p-5'>Track Tickets</a>
            </div>  

            <div className="row" id="supportContent">
                <div className="col-5 p-4">
                    <h3 className='mb-4'>Search for an answer or browse help topics to create a ticket</h3> 
                    <input type="text" className="form-control mb-4" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." aria-label="Eg: how do I activate F&O, why is my order getting rejected.." aria-describedby="button-addon2" style={{height: "60px"}}/> 

                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a> 
                    <a href="">Intraday</a>
                    <a href="">Margins</a> 
                    <a href="">Kite user manuals</a>
                </div>
                <div className="col-2 p-5"></div>
                <div className="col-5 p-5">
                    <h3>Featured</h3> 
                    <ol style={{lineHeight: "2.6"}}> 
                        <li><a href="">Current Takeovers and Delisting - February-2026</a> </li>
                        <li><a href="">Latest Intraday Leverages - MIS & CO</a> </li>
                    </ol>
                </div>
            </div>
        </section> 
    );
}

export default Hero;