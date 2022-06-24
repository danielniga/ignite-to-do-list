import {useState} from "react";
import {Container } from "./styled";

interface BodyItemsProps {
    id:number;
    text: string;
    isChecked: boolean;
    clickChangeChehck:(id:number)=>void;
    clickRemoveItem:(id:number)=>void;
}

export default function BodyItems({id,text,isChecked,clickChangeChehck,clickRemoveItem}:BodyItemsProps){    
    return(
        <Container changeLine={isChecked}>
            <img onClick={()=>{clickChangeChehck(id)}} src={`assets/${isChecked?"checkTrue.png":"checkFalse.png"}`}/>
            <p>{text}</p>
            <img onClick={()=>{clickRemoveItem(id)}} src="assets/trash.png"/>
        </Container>
    )
}