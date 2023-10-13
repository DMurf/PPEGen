import GetSecretSocieties from './secretsocieties'  
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


describe('Wounds populator', function() {
    test('is rendered', ()=> {
        render(<GetSecretSocieties />);
        const inputItem = screen.getByRole("listbox");
        expect(inputItem).toBeInTheDocument();
    });

    test('has default option', ()=> {
        render(<GetSecretSocieties />);
        const selectItem = screen.getByRole('option', { name: '-- Select one --'});
        expect(selectItem).toBeInTheDocument();
    });

    test('has final option', ()=> {
        render(<GetSecretSocieties />);
        const selectItem = screen.getByRole('option', { name: 'Romantics' });
        expect(selectItem).toBeInTheDocument();
    });
});