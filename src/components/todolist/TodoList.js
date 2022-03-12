import React, {Component} from 'react';
import './TodoList.scss'
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';

class TodoList extends Component {
    state = {
        listTodo: [
            {id:1,title:'todo 1'},
            {id:2,title:'todo 2'},
            {id:3,title:'todo 3'},
        ],
        editTodo:{}
    }
    addTodo = (item) => {
        this.setState({
            listTodo: [...this.state.listTodo,item]
        })
        toast.success('success')
    }
    handleOnClickDelete = (todo) => {
        let current = this.state.listTodo;
        current = current.filter(item => item.id !== todo.id)
        this.setState({
            listTodo:current
        })
        toast.success('delete success!!')
    }
    handleEdit = (todo) => {
        let {editTodo,listTodo} = this.state;
        let isEmptyObj = Object.keys(todo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id){
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id)
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('update success')
            return;
        }
        //edit
        this.setState({
            editTodo:todo
        })
    }
    handleOnChangeEdit = (event) => {
        let  editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo:editTodoCopy
        })
    }
    render() {
        let {listTodo,editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo addTodo={this.addTodo}/>
                <div className="list-todo">
                    {
                        listTodo && listTodo.length > 0 &&
                        listTodo.map((item,index) => {
                            return (
                                <div className="list-todo-item" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                {index + 1} - <input type="text" value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEdit(event)}/>
                                                </span>
                                                :
                                                <span> {index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }<button onClick={() => this.handleEdit(item)}>
                                    {isEmptyObj === false && editTodo.id === item.id ? 'save' : 'edit'}
                                    </button>
                                    <button onClick={() => this.handleOnClickDelete(item)}>delete</button>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;