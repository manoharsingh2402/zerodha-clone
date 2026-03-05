import React from 'react'; 
import { Link } from 'react-router-dom'; 

function NotFound() {
    return ( 
        <> 
            <div className='container p-5 m-5 text-center'>
                <div className='row text-center'>
                    <div className='col'>
                        <h3 className='mb-3'>404</h3> 
                        <h2 className='display-4'>Kiaan couldn't find that page.</h2> 
                        <p className='lead'>We couldn’t find the page you were looking for. Visit <Link to="/" className=" text-decoration-none" style={{color:"rgb(10,10,256)"}}>Zerodha’s home page</Link></p>
                    </div> 
                    <div className='col'>
                        <img src='media/images/kiaan404.jpg' alt='404 Not Found' className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
     );
}

export default NotFound;