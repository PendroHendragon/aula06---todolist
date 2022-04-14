import { useState } from "react";
import TodoService from "../service/service";

export default function Item({item,index}) {
    const [check, setCheck] = useState(item.checked);
    const [Style, setStyle] = useState({ margin: "0px 5px" });
    const liStyle = {
        border: "1px solid grey",
        margin: "5px 0px",
        padding: "12px 5px"
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
            <div>
                <label className="checkbox is-flex is-align-items-center" htmlFor={"check-" + index}>
                    <input onChange={(e)=>{checked(e)}} type="checkbox" id={"check-" + index} defaultChecked={check}/>
                    <p style={check ?{ margin: "0px 5px", color: "red" }:{ margin: "0px 5px" }}>{index+":"+item.title}</p>
                </label>
            </div>
        </li>

    );
}