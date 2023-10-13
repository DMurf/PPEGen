import GetWounds from './wounds'  
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


describe('Wounds populator', function() {
    test('is rendered', ()=> {
        render(<GetWounds />);
        const inputItem = screen.getByRole("listbox");
        expect(inputItem).toBeInTheDocument();
    });

    test('has default option', ()=> {
        render(<GetWounds />);
        const selectItem = screen.getByRole('option', { name: 'Fine'});
        expect(selectItem).toBeInTheDocument();
    });

    test('has final option', ()=> {
        render(<GetWounds />);
        const selectItem = screen.getByRole('option', { name: 'Dead' });
        expect(selectItem).toBeInTheDocument();
    });
});