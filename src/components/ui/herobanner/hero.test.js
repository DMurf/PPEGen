import GetHero from './hero'
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'

describe('UI test', function() {
    test('hero title exists', ()=> {
        render(<GetHero />);
        const button = screen.getByText('Paranoia Perfect Edition');
        expect(button).toBeTruthy()
    });
});