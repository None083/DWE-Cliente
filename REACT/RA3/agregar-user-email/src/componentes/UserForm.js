import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onAddUser}>
                <input type="text" placeholder="nombre" name="name"/>
                <input type="text" placeholder="email" name="email"/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }
}
export default UserForm;