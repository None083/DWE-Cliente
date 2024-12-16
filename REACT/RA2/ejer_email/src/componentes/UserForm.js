import { Component } from "react";

class UserForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onAddUser}>
                <input type="text" placeholder="Nombre" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }
}
export default UserForm;