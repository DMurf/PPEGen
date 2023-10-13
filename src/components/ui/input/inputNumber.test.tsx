import GetInputNumber, {inputNumProps} from './inputNumber';    
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


const inputObj:inputNumProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: 'helptext',
    label: 'labeltext',
    maximum:5,
    minimum:-5
}

const emptyHelpInputObj:inputNumProps ={
    id: "testingId",
    placeholder: 'placeholdertext',
    helpText: '',
    label: 'labeltext',
    maximum:5,
    minimum:-5
}


describe("UI input number", function () {
  test("is rendered", () => {
    render(<GetInputNumber id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const inputItem = screen.getByRole("textbox");
    expect(inputItem).toBeInTheDocument();
  });

  test("has correct label", () => {
    render(<GetInputNumber id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const inputItem = screen.getByLabelText(inputObj.label);
    expect(inputItem).toBeInTheDocument();
  });

  test("shows help when exists", () => {
    render(<GetInputNumber id={inputObj.id} placeholder={inputObj.placeholder} helpText={inputObj.helpText} label={inputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const inputItem = screen.getByText(inputObj.helpText);
    expect(inputItem).toHaveClass("help");
    expect(inputItem).toBeInTheDocument();
  });

  test("hides help when not exists", () => {
    render(<GetInputNumber id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const inputItem = screen.getByRole("textbox");
    expect(inputItem).not.toContain("help");
  });

  test("maximum value is adhered to", async () => {
    const user = userEvent.setup();
    render(<GetInputNumber id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const input = screen.getByPlaceholderText(emptyHelpInputObj.placeholder);
    await user.type(input, "5");
    expect(input).toHaveValue(5);
    expect(input).toBeValid;
  });

  test("minimum value is adhered to", async () => {
    const user = userEvent.setup();
    render(<GetInputNumber id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const input = screen.getByPlaceholderText(emptyHelpInputObj.placeholder);
    await user.type(input, "-5");
    expect(input).toHaveValue(-5);
    expect(input).toBeValid;
  });

  test("exceeding minimum value is invalid", async () => {
    const user = userEvent.setup();
    render(<GetInputNumber id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const input = screen.getByPlaceholderText(emptyHelpInputObj.placeholder);
    await user.type(input, "-6");
    expect(input).toHaveValue(-6);
    expect(input).not.toBeValid;
  });

  test("exceeding maximum value is invalid", async () => {
    const user = userEvent.setup();
    render(<GetInputNumber id={emptyHelpInputObj.id} placeholder={emptyHelpInputObj.placeholder} helpText={emptyHelpInputObj.helpText} label={emptyHelpInputObj.label} maximum={inputObj.maximum} minimum={inputObj.minimum} />);
    const input = screen.getByPlaceholderText(emptyHelpInputObj.placeholder);
    await user.type(input, "6");
    expect(input).toHaveValue(6);
    expect(input).not.toBeValid;
  });
});