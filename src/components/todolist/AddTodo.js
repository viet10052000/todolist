import React, {Component} from 'react';
import {toast} from "react-toastify";
class AddTodo extends Component {
    state = {
        title:''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title){
            toast.error('missing title')
            return;
        }
        let todo = {
            id:Math.floor(Math.random()*10000),
            title: this.state.title
        }
        this.props.addTodo(todo)
        this.setState({
            title:''
        })
    }

    render() {
        let {title} = this.state;

        return (
            <div className="add-todo">
                <input type="text" value={title}
                       onChange={(event) => this.handleOnChangeTitle(event)}/>
                <button type="button" onClick={this.handleAddTodo}>Add</button>
            </div>
        );
    }
}

export default AddTodo;