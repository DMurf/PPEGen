import GetMutantPowers from './mutantpowers'  
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


describe('Wounds populator', function() {
    test('is rendered', ()=> {
        render(<GetMutantPowers />);
        const inputItem = screen.getByRole("select");
        expect(inputItem).toBeInTheDocument();
    });

    test('has default option', ()=> {
        render(<GetMutantPowers />);
        const selectItem = screen.getByRole('option', { name: '-- Select one --'});
        expect(selectItem).toBeInTheDocument();
    });

    test('has final option', ()=> {
        render(<GetMutantPowers />);
        const selectItem = screen.getByRole('option', { name: 'X-ray Vision' });
        expect(selectItem).toBeInTheDocument();
    });
});