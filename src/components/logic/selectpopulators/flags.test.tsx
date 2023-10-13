import GetFlags from './flags'  
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


describe('Flags populator', function() {
    test('is rendered', ()=> {
        render(<GetFlags />);
        const inputItem = screen.getByRole("select");
        expect(inputItem).toBeInTheDocument();
    });

    test('has default option', ()=> {
        render(<GetFlags />);
        const selectItem = screen.getByRole('option', { name: 'Loyal (0 stars)' });
        expect(selectItem).toBeInTheDocument();
    });

    test('has final option', ()=> {
        render(<GetFlags />);
        const selectItem = screen.getByRole('option', { name: 'Wanted (4 stars)' });
        expect(selectItem).toBeInTheDocument();
    });
});