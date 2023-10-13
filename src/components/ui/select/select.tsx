export interface selectProps{
    id: string;
    label:string;
    customOptions:selectKeyValue[];
}

export interface selectKeyValue{
  label:string;
  value:string;
}


function GetSelect(inputProps: selectProps){
    return (
      <div className="field">
        <label className="label" htmlFor={inputProps.id}>
          {inputProps.label}
        </label>
        <div className="control">
          <div className="select">
            <select role="select" id={inputProps.id} name={inputProps.id}>
            {inputProps.customOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
            </select>
          </div>
        </div>
      </div>
    );
}

export default GetSelect;
