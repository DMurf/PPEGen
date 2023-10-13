import GetSelect, { selectKeyValue, selectProps } from "../../ui/select/select";

let flagList :selectKeyValue[]= [
    {  label:"Loyal (0 stars)", value:""},
    {  label:"Greylisted (1 star)", value:"2"},
    {  label:"Restricted (2 stars)", value:"3"},
    {  label:"Citizen-of-interest (3 stars)", value:"4"},
    {  label:"Wanted (4 stars)", value:"5"}
]

function GetFlags(){
    return (
        <GetSelect id={"flags"} label={"Flags"} customOptions={flagList} ></GetSelect>
    )
}
export default GetFlags