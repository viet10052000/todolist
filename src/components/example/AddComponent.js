import React, {Component} from 'react';

class AddComponent extends Component {
    state = {
        title:'',
        salary:''
    }
    render() {
        return (
            <div>
                <form>
                    <label>Title:</label><br/>
                    <input type="text" value={this.state.title}
                           onChange={event => this.handleTitle(event)}/><br/>
                    <label>Salary:</label><br/>
                    <input type="text" value={this.state.salary}
                           onChange={event => this.handleSalary(event)} /><br/><br/>
                    <input type="submit"
                           onClick={(event) => this.handleSubmit(event)} />
                </form>
            </div>
        );
    }
    handleTitle = (event) => {
        this.setState({
            title:  event.target.value,
        })
    }
    handleSalary = (event) => {
        this.setState({
            salary:  event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary){
            alert('missing params')
            return;
        }
        this.props.addNewJob({
            id:Math.floor(Math.random()*100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title:'',
            salary:''
        })
    }
}

export default AddComponent;