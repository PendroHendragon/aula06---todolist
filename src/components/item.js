import { useState } from "react";
import TodoService from "../service/service";

export default function Item({item,index}) {
    const [check, setCheck] = useState(item.checked);
    const [Style, setStyle] = useState({ margin: "0px 5px" });
    const liStyle = {
        border: "1px solid grey",
        margin: "5px 0px",
        padding: "12px 5px",
        borderRadius: '5px'
    }
    const todoStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const todoService = new TodoService();
    function checked(evento) {
        setCheck(evento.target.checked);
        
        todoService.update({
            id: item.id,
            title: item.title,
            checked:evento.target.checked
        })
        if(check){
            setStyle();
        }else{
            setStyle();
        }
        


    }

    return (
        <li style={liStyle}>
            <div style={todoStyle}>
                <input onChange={(e)=>{checked(e)}} type="checkbox" id={"check-" + index} defaultChecked={check}/>
                <label className="checkbox is-flex is-align-items-center" htmlFor={"check-" + index} style={check ?{ margin: "0px 5px", color: "red" }:{ margin: "0px 5px" }}>{index+":"+item.title}</label>
                <button className='btn'>X</button>
            </div>
        </li>

    );
}