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
                    console.log(this.state.tarea);
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

