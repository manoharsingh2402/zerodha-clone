import React from 'react'; 
import { render, screen } from '@testing-library/react'; 
import Hero from '../landing_page/home/Hero.js'; 
import "@testing-library/jest-dom/extend-expect"; 

describe('Hero Component', () => {
    test('renders the Hero Image', () => {
        render(<Hero />);   
        const heroImage= screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument(); 
        expect(heroImage).toHaveAttribute('src', '/media/images/homeHero.png');
    });  
    test('renders signup button', () => {
        render(<Hero />);   
        const signupButton = screen.getByText('Signup Now');
        expect(signupButton).toBeInTheDocument(); 
        expect(signupButton).toHaveClass('btn-primary');
    });  
}); 
