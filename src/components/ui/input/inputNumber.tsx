export interface inputNumProps{
    id: string;
    placeholder:string;
    helpText:string;
    label:string,
    maximum:number,
    minimum:number
}

function GetInputNumber(inputProps: inputNumProps){
    return(
  <div className="field">
    <label className="label" htmlFor={inputProps.id}>
      {inputProps.label}
    </label>
    <div className="control">
      <input className="input" type="number" placeholder={inputProps.placeholder} id={inputProps.id} name={inputProps.id} role="input" max={inputProps.maximum} min={inputProps.minimum}/>
    </div>
    {inputProps.helpText.length === 0 ? null : <p className="help">{inputProps.helpText}</p>}
  </div>)
  ;
}

export default GetInputNumber;
