import GetSelect, {selectProps, selectKeyValue} from './select';    
import {render, screen} from '@testing-library/react'
import React, {useState} from 'react';
import '@testing-library/jest-dom'

const testSelect :selectKeyValue[]= [
    {  label:"One", value:"one"},
    {  label:"Two", value:"two"},
    {  label:"Three", value:"three"}
]

const selectObj:selectProps ={
    id: "testingId",
    label: 'labeltext',
    customOptions: testSelect
}

describe('UI select', function() {
    test('is rendered', ()=> {
        render(<GetSelect id={selectObj.id} label={selectObj.label} customOptions={selectObj.customOptions} />);
        const inputItem = screen.getByRole("listbox");
        expect(inputItem).toBeInTheDocument()
    });
});