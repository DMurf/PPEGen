import GetTextArea, {textAreaProps} from './textarea'; 
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'


const textAreaObj:textAreaProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: 'helptext',
    label: 'labeltext',
    rows: 10
}

const noHelpTextAreaObj:textAreaProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: '',
    label: 'labeltext',
    rows: 10
}

describe('UI text area', function() {
    test('is rendered', ()=> {
        render(<GetTextArea id={textAreaObj.id} placeholder={textAreaObj.placeholder} helpText={textAreaObj.helpText} label={textAreaObj.label} rows={textAreaObj.rows} />);
        const inputItem = screen.getByRole("textarea");
        expect(inputItem).toBeInTheDocument()
    });

    test('shows help when exists', ()=> {
        render(<GetTextArea id={textAreaObj.id} placeholder={textAreaObj.placeholder} helpText={textAreaObj.helpText} label={textAreaObj.label} rows={textAreaObj.rows} />);
        const inputItem = screen.getByText(textAreaObj.helpText);
        expect(inputItem).toHaveClass("help");
        expect(inputItem).toBeInTheDocument();
    });

    test('hides help when not exists', ()=> {
        render(<GetTextArea id={noHelpTextAreaObj.id} placeholder={noHelpTextAreaObj.placeholder} helpText={noHelpTextAreaObj.helpText} label={noHelpTextAreaObj.label} rows={noHelpTextAreaObj.rows} />);
        const inputItem = screen.getByRole("textarea");
        expect(inputItem).not.toContain("help");
    });
});