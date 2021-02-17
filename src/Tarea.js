import  React,{ Component } from "react";

class Tarea extends Component{
    constructor(){
        super();
        this.state = {
            editando : false
        }
    }
    render(){ //
        return (
            <div className="tarea">
                <h3 className={!this.state.editando ?  "visible" : " "}>{this.props.tarea}</h3>
                <input className={this.state.editando ?  "visible" : " "} type="text" defaultValue={this.props.tarea}/>
                <a className="boton" href="#" onClick={
                    evento => {
                        evento.preventDefault();
                        this.setState({ editando : !this.state.editando });
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