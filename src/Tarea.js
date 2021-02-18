import  React,{ Component } from "react";
import ajax from "./Ajax";

class Tarea extends Component{
    constructor(){
        super();
        this.state = {
            editando : false,
            temporal : "" //guardara los posibles cambios
        };
    }
    componentDidMount(){
        this.setState({ 
            temporal : this.props.tarea
            
        });
    }
    render(){ 
        return (
            <div className="tarea">
                <h3 className={!this.state.editando ?  "visible" : " "}>{this.props.tarea}</h3>
                <input className={this.state.editando ?  "visible" : ""} type="text" value={this.state.temporal} onChange={
                    evento => {
                        this.setState({ temporal : evento.target.value });
                    }
                }/>
                <a className="boton" href="#" onClick={
                    evento => {
                        evento.preventDefault();
                        if(this.state.editando){
                            //guardar
                            if(this.state.temporal.trim() != "" && this.state.temporal.trim()!= this.props.tarea){
                                //guardar
                                var datos = { id : this.props.id, tarea : this.state.temporal, operacion : 1};
                                
                                ajax('PUT', datos).then(datos => {
                                    if(datos.resultado === "ok"){
                                        this.setState({ editando : false });
                                        this.props.actualizarTarea(this.props.id, this.state.temporal);
                                    }
                                });
                            }else{
                                this.setState({
                                    temporal : this.props.tarea,
                                    editando : false
                                });
                            }
                        }else{ 
                            //editar
                            this.setState({editando : true }); 
                         }
                    }
                }>{this.state.editando ? "guardar" : "editar"}</a>
                <a className="boton" href="#" onClick={
                    evento => {
                        evento.preventDefault();
                        this.props.borrarTarea(this.props.id);
                    }
                }>Borrar</a>
                <button className={`estado ${this.props.terminada ? "terminada" : ""}`}onClick={
                    ()=>{
                        this.props.actualizarEstado(this.props.id);
                    }
                }><span></span></button>
            </div>
        );
    }
} 
export default Tarea; 