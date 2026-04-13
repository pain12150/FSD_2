import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
    it('renders the form correctly', () => {
        render(<ContactForm />);
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    });

    it('shows error message if required fields are missing', () => {
        render(<ContactForm />);
        fireEvent.click(screen.getByTestId('submit-button'));
        expect(screen.getByTestId('status-message')).toHaveTextContent('Error: Name and Email are required.');
    });

    it('shows success message when form is filled and submitted', () => {
        render(<ContactForm />);
        fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'john@example.com' } });
        fireEvent.click(screen.getByTestId('submit-button'));
        
        expect(screen.getByTestId('status-message')).toHaveTextContent('Success: Form submitted!');
    });
});
