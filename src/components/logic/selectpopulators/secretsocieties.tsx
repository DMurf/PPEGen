import GetSelect, { selectKeyValue, selectProps } from "../../ui/select/select";

let societyList :selectKeyValue[]= [
    { label:"-- Select one --", value:""},
    { label:"Antimutant", value:"antimutant"},
    { label:"Communists", value:"communists"},
    { label:"Corpore Metal", value:"corpore metal"},
    { label:"Death Leopard", value:"death leopard"},
    { label:"FCCCP", value:"fcccp"},
    { label:"Frankenstein Destroyers", value:"frankenstein-destroyers"},
    { label:"Free Enterprise", value:"free enterprise"},
    { label:"Haxxor", value:"haxxor"},
    { label:"Psion", value:"psion"},
    { label:"PURGE", value:"purge"},
    { label:"Romantics", value:"romantics"}
    
]

function GetSecretSocieties(){
    return (
        <GetSelect id={"secretsociety"} label={"Secret Society"} customOptions={societyList} ></GetSelect>
    )
}
export default GetSecretSocieties;