import React,{Component} from "react";
import Tarea from "./Tarea";
import Formulario from "./Formulario";
import ajax from "./Ajax";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tareas : []
        };
        
    }
    componentDidMount(){
        ajax().then(datos => {
            console.log(datos)
            this.setState({ tareas : datos });
        });
            
    }
    render(){
        return (
        <>
        <Formulario />
            <section className="tareas">
                {this.state.tareas.map((item,indice) =><Tarea key ={indice} id ={item.id}tarea={item.tarea} terminada={!!Number(item.terminada)} />)}
            </section>
        </>
        );
    }
}

export default Todo; 

//
