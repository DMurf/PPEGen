import GetSelect, { selectKeyValue, selectProps } from "../../ui/select/select";

let MBDs :selectKeyValue[]= [
    {  label:"-- Select one --", value:""},
    {  label:"Team Leader", value:"tl"},
    {  label:"Equipment Officer", value:"eo"},
    {  label:"Happiness Officer", value:"hao"},
    {  label:"Hygiene Officer", value:"hyp"},
    {  label:"Loyalty Officer", value:"lo"},
    {  label:"Media Officer", value:"mo"}
]

function GetMandatoryBonusDuties(){
    return (
        <GetSelect id={"mandatorybonusduty"} label={"Mandatory Bonus Duty"} customOptions={MBDs} ></GetSelect>
    )
}
export default GetMandatoryBonusDuties