import GetInput, {inputProps} from './input';    
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


const inputObj:inputProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: 'helptext',
    label: 'labeltext',
    maxlength:50
}

const emptyHelpInputObj:inputProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: '',
    label: 'labeltext',
    maxlength: 3
}

const longTextVal = "123456789012345678901234567890";
const shortTextVal = "123";

describe("UI input", function () {
  test("is rendered", () => {
    render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maxlength={inputObj.maxlength} />);
    const inputItem = screen.getByRole("input");
    expect(inputItem).toBeInTheDocument();
  });

  test("has correct label", () => {
    render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maxlength={inputObj.maxlength} />);
    const inputItem = screen.getByLabelText(inputObj.label);
    expect(inputItem).toBeInTheDocument();
  });

  test("shows help when exists", () => {
    render(<GetInput id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maxlength={inputObj.maxlength} />);
    const inputItem = screen.getByText(inputObj.helpText);
    expect(inputItem).toHaveClass("help");
    expect(inputItem).toBeInTheDocument();
  });

  test("hides help when not exists", () => {
    render(<GetInput id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maxlength={inputObj.maxlength} />);
    const inputItem = screen.getByRole("input");
    expect(inputItem).not.toContain("help");
  });

  test("max length value is adhered to", async () => {
    const user = userEvent.setup();
    render(<GetInput id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maxlength={emptyHelpInputObj.maxlength} />);
    const input = screen.getByPlaceholderText(emptyHelpInputObj.placeholder);
    await user.type(input, longTextVal);
    expect(input).toHaveValue(shortTextVal);
  });
});