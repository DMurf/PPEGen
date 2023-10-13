import GetSelect, { selectKeyValue, selectProps } from "../../ui/select/select";

let powerList :selectKeyValue[]= [
    { label:"-- Select one --", value:""},
    { label:"Adrenalin Control", value:"adrenalincontrol"},
    { label:"Clone Empathy", value:"clone empathy"},
    { label:"Corrode", value:"corrode"},
    { label:"Cryokinesis", value:"cryokinesis"},
    { label:"Electroshock", value:"electroshock"},
    { label:"Force Field", value:"force field"},
    { label:"Hypersenses", value:"hypersenses"},
    { label:"Invisibility", value:"invisibility"},
    { label:"Levitation", value:"levitation"},
    { label:"Machine Empathy", value:"machineempathy"},
    { label:"Mental Blast", value:"mental blast"},
    { label:"Pyrokinesis", value:"pyrokinesis"},
    { label:"Telekinesis", value:"telekinesis"},
    { label:"Telepathy", value:"telepathy"},
    { label:"Teleport", value:"teleport"},
    { label:"X-ray Vision", value:"x-ray vision"}  
]

function GetMutantPowers(){
    return (
        <GetSelect id={"mutantpower"} label={"Mutant Power"} customOptions={powerList} ></GetSelect>
    )
}
export default GetMutantPowers;