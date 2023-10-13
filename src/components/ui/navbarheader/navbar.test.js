import GetHeader from './navbar'
import {render, screen} from '@testing-library/react'
import React, {useState, useEffects} from 'react';

describe('UI test', function() {
    test('header title exists', ()=> {
        render(<GetHeader />);
        const button = screen.getByText('PPE:Gen');
        expect(button).toBeTruthy()
    });
});