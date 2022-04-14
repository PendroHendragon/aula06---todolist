import axios from "axios";

export default class TodoService{

    BASE_URL = "https://senai-todo-list-api.herokuapp.com/todos";

    constructor(){
       
    }

    load(){
        return axios.get('https://senai-todo-list-api.herokuapp.com/todos').then(
            (response) => {
                return(response.data);
            }
        ).catch((error) => {
            console.log(error);
        });

    }

    async save(todo){
        return await axios.post("https://senai-todo-list-api.herokuapp.com/todos", todo).then((response) => {
            return response.data;
        }).catch((error) => { console.log(error) });

    };

    update(todo){
        return axios.patch(this.BASE_URL+`/${todo.id}`,todo).then((response)=>{
            return response.status
        }).catch((error)=>{console.log(error)});
    }
}