import Nav from "../src/components/nav";
import { useState, useEffect } from "react";
import Listan from "../src/components/listan.js";
import "bulma/css/bulma.css";
import Navbar from "../src/components/navbar";
import TodoService from "../src/service/service";



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
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px"
}

const listStyle = {
    width: '80%',
    margin: 'auto'
}



export default function Home() {
    const [todoValue, setTodoValue] = useState("");
    const [lista, setLista] = useState([]);
    const [dbName, setDbName] = useState('todo');
    const [lista2, setLista2] = useState()


    const todoService = new TodoService();
    // useEffect(()=>{
    //     const storage1 = window.localStorage;

    //     const sce = JSON.parse(storage1.getItem('todo'));
    //     if(sce=="" || sce == null || sce== undefined){
    //         storage1.setItem(dbName,JSON.stringify([]));
    //     }else{
    //         setLista(sce);
    //     }


    // },[])

    // useEffect(function(){
    //     const storage1 = window.localStorage;
    //     if(lista.length>0){
    //         storage1.setItem(dbName,JSON.stringify(lista));

    //     }



    // },[lista])

    useEffect(() => {
        todoService.load().then((data)=>{
            setLista(data);
        })

    }, []);

    const saveTodo = (todo) => {
        return axios.post("https://senai-todo-list-api.herokuapp.com/todos", todo).then((response) => {
            return response.data;
        }).catch((error) => { console.log(error) });

    };



    function adcionaNaLista() {
        const objData = {
            title: todoValue,
            checked: false
        }
        const saved = todoService.save(objData);

        saved.then(() => {
            todoService.load().then((data)=>{
                setLista(data);
            })
        });
        

        setTodoValue("");

    }





    return (
        <div>


            <Nav />
            <div id="to-do" style={mainStyle}>
                <div style={divStyle}>
                    <label htmlFor="task" className="label">Add Task:</label>
                    <input onChange={(e) => { setTodoValue(e.target.value) }} type="text" id="task" name="task" className="input" placeholder="Enter your task" value={todoValue} />

                </div>
                <div style={divStyle}>
                    <button onClick={adcionaNaLista} className="button is-dark">Add task</button>
                </div>

            </div>

            <div className="is-flex justify-content-center" style={titleStyle}>
                <h3 className="title ">My tasks:</h3>
            </div>

            <div style={listStyle}>

                <Listan lista={lista} />
            </div>

        </div>
    );
}