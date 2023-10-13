import GetInput, {inputProps} from './input';    
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


const inputObj:inputProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: 'helptext',
    label: 'labeltext'
}

const emptyHelpInputObj:inputProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: '',
    label: 'labeltext'
}

describe('UI input', function() {
    test('is rendered', ()=> {
        render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} />);
        const inputItem = screen.getByRole("input");
        expect(inputItem).toBeInTheDocument()
    });

    test('has correct label', ()=> {
        render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} />);
        const inputItem = screen.getByLabelText(inputObj.label);
        expect(inputItem).toBeInTheDocument()
    });

    test('shows help when exists', ()=> {
        render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} />);
        const inputItem = screen.getByText(inputObj.helpText);
        expect(inputItem).toHaveClass("help");
        expect(inputItem).toBeInTheDocument();
    });

    test('hides help when not exists', ()=> {
        render(<GetInput id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} />);
        const inputItem = screen.getByRole("input");
        expect(inputItem).not.toContain("help");
    });
});