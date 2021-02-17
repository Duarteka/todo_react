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
    crearTarea = tarea => {
        var datos = { tarea : tarea };
        
        ajax("POST",datos).then(datos =>{
            if(datos.resultado === "ok"){
                
            }
        });


    }
    actualizarEstado = id => {
        var datos = { id : id, operacion : 2 };
        
        ajax("PUT", datos).then(datos => {
            if(datos.resultado === "ok"){
                var tareas = this.state.tareas.map(item => {
                    if(Number(item.id)=== Number(id)){
                        item.terminada = Number(item.terminada) === 1 ? 0 : 1; 
                    }
                    return item;
                });
                this.setState({tareas : tareas});
            }
        });
    }
    borrarTarea = id => {
        var datos = { id : id }
        
        ajax("DELETE", datos).then(datos => {
            if(datos.resultado === "ok"){
                var tareas = this.state.tareas.filter(item => item.id != id);
                this.setState({tareas : tareas});
            }
            
        });
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
                {this.state.tareas.map((item,indice) =><Tarea key ={indice} id ={item.id}tarea={item.tarea} terminada={!!Number(item.terminada)} actualizarEstado={this.actualizarEstado} borrarTarea={this.borrarTarea} />)}
            </section>
        </>
        );
    }
}
export default Todo; 

//
