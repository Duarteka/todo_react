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
            <form>
                <input type="text" />
                <input type="submit" value="crear" />  
                               
            </form>
        );
    }
}
export default Formulario;

