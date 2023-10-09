import GetHero from './hero'
import {render, screen} from '@testing-library/react'
import React, {useState, useEffects} from 'react';

test('hero title exists', ()=> {
    render(<GetHero />);
    const button = screen.getByText('Paranoia Perfect Edition');
    expect(button).toBeTruthy()
});