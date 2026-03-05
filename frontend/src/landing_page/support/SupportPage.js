import React from 'react';
import Hero from './Hero';
import Footer from '../Footer'; 
import Navbar from '../Navbar';
import CreateTicket from './CreateTicket'; 

function SupportPage() {
    return ( 
        <> 
            <Hero />
            <CreateTicket /> 
        </>
     );
}

export default SupportPage;