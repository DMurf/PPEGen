import GetMandatoryBonusDuties from './mbd'  
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


describe('MBD populator', function() {
    test('is rendered', ()=> {
        render(<GetMandatoryBonusDuties />);
        const inputItem = screen.getByRole("listbox");
        expect(inputItem).toBeInTheDocument();
    });

    test('has default option', ()=> {
        render(<GetMandatoryBonusDuties />);
        const selectItem = screen.getByRole('option', { name: '-- Select one --' });
        expect(selectItem).toBeInTheDocument();
    });

    test('has final option', ()=> {
        render(<GetMandatoryBonusDuties />);
        const selectItem = screen.getByRole('option', { name: 'Media Officer' });
        expect(selectItem).toBeInTheDocument();
    });
});