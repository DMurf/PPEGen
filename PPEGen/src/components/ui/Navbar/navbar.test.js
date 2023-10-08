import GetHeader from './navbar'
import {render, screen} from '@testing-library/react'
import React, {useState, useEffects} from 'react';

test('check counter', ()=> {
    render(<GetHeader />);
    const button = screen.getByText('PPE:Gen');
    expect(button).toBeTruthy()
});