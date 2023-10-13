export interface textAreaProps{
    id: string;
    placeholder:string;
    helpText:string;
    label:string;
    rows:number;
}


function GetTextArea(inputProps: textAreaProps){
    return(
  <div className="field">
    <label className="label" htmlFor={inputProps.id}>
      {inputProps.label}
    </label>
    <div className="control">
      <textarea role="textarea" className="textarea" rows={inputProps.rows} placeholder={inputProps.placeholder} id={inputProps.id} name={inputProps.id} ></textarea>
    </div>
    {inputProps.helpText.length === 0 ? null : <p className="help">{inputProps.helpText}</p>}
  </div>)
  ;
}

///export default GetInput;
export default GetTextArea;
