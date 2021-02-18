import React, {Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
        tarea : ""
        };
    }
    render(){
        return(
            <form onSubmit={
                evento => {
                    evento.preventDefault();
                    if(this.state.tarea.trim().length > 0 ){
                        this.props.crearTarea(this.state.tarea);
                        this.setState({tarea : ""});
                    }
                }
            }>
                <input type="text" value ={this.state.tarea} onChange={
                    evento =>{
                        this.setState({ tarea : evento.target.value });
                    }
                } />
                <input type="submit" value="crear"  />  
                               
            </form>
        );
    }
}
export default Formulario;

