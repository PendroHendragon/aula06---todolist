import Nav from "../src/components/nav";
import { useState, useEffect } from "react";
import Listan from "../src/components/listan.js";
import "bulma/css/bulma.css";
import Navbar from "../src/components/navbar";



const divStyle = {
    margin: "5px 0px",
    display: "flex",
    flexDirection: "column"
}
const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const titleStyle = {
    display:"flex",
    justifyContent: "center",
    margin: "10px 0px"
}



export default function Home() {
    const [todoValue, setTodoValue] = useState("");
    const [lista, setLista] = useState([]);
    const [dbName,setDbName] = useState('todo');
    const [lista2, setLista2] = useState()
    
     
        
    useEffect(()=>{
        const storage1 = window.localStorage;
        
        const sce = JSON.parse(storage1.getItem('todo'));
        if(sce=="" || sce == null || sce== undefined){
            storage1.setItem(dbName,JSON.stringify([]));
        }else{
            setLista(sce);
        }
        
        
    },[])

    useEffect(function(){
        const storage1 = window.localStorage;
        if(lista.length>0){
            storage1.setItem(dbName,JSON.stringify(lista));
            
        }
        
        

    },[lista])

    
    
    

    function adcionaNaLista() {
        const objData = {
            id: lista.length,
            task: todoValue,
            checked: false
        }
        setLista([...lista, todoValue],console.log("nome: "+lista.length));
        setLista2(lista)
        

        setTodoValue("");
        
    }
    


    return (
        <div>


            <Navbar />
            <div id="to-do" style={mainStyle}>
                <div style={divStyle}>
                    <label htmlFor="task" className="label">Add Task:</label>
                    <input onChange={(e)=>{setTodoValue(e.target.value)}} type="text" id="task" name="task" className="input" placeholder="Enter your task" value={todoValue}/>

                </div>
                <div style={divStyle}>
                    <button onClick={adcionaNaLista} className="button is-dark">Add task</button>
                </div>

            </div>

            <div className="is-flex justify-content-center" style={titleStyle}>
                <h3 className="title ">My tasks:</h3>
            </div>
            
            <ul>
                <Listan lista={lista} />
            </ul>

        </div>
    );
}