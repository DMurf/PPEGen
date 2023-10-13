import GetSelect, { selectKeyValue, selectProps } from "../../ui/select/select";

let woundList :selectKeyValue[]= [
    {  label:"Fine", value:""},
    {  label:"Hurt", value:"2"},
    {  label:"Injured", value:"3"},
    {  label:"Maimed", value:"4"},
    {  label:"Dead", value:"5"}
]

function GetWounds(){
    return (
        <GetSelect id={"wounds"} label={"Wounds"} customOptions={woundList} ></GetSelect>
    )
}
export default GetWounds