export interface inputProps{
    id: string;
    placeholder:string;
    helpText:string;
    label:string,
    maxlength:number
}

function GetInput(inputProps: inputProps){
    return(
  <div className="field">
    <label className="label" htmlFor={inputProps.id}>
      {inputProps.label}
    </label>
    <div className="control">
      <input className="input" type="text" placeholder={inputProps.placeholder} id={inputProps.id} name={inputProps.id} role="textbox" maxLength={inputProps.maxlength}/>
    </div>
    {inputProps.helpText.length === 0 ? null : <p className="help">{inputProps.helpText}</p>}
  </div>)
  ;
}

export default GetInput;
