import React,{Component} from "react";
import Tarea from "./Tarea";
import Formulario from "./Formulario";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tareas : ["j","l","k"]
        };
    }
    render(){
        return (

            <>
            <Formulario />
            <section className="tareas">
                {this.state.tareas.map((item,indice) =><Tarea key ={indice} tarea="prueba..." terminada={false}/>)}
            </section>
            </>
        );
    }
}

export default Todo; 

//
