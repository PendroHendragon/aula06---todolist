import { useState } from "react";

export default function Item({item,index}) {
    const [check, setCheck] = useState(false);
    const [Style, setStyle] = useState({ margin: "0px 5px" });
    const liStyle = {
        border: "1px solid grey",
        margin: "5px 0px",
        padding: "12px 5px"
    }
    function checked(evento) {
        if(evento.target.checked){
            setStyle({ margin: "0px 5px", color: "red" });
        }else{
            setStyle({ margin: "0px 5px" });
        }
        


    }

    return (
        <li style={liStyle}>
            <div>
                <label className="checkbox is-flex is-align-items-center" htmlFor={"check-" + index}>
                    <input onClick={(e)=>{checked(e)}} type="checkbox" id={"check-" + index} />
                    <p style={Style}>{index+":"+item}</p>
                </label>
            </div>
        </li>

    );
}