import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends Component {
    /*
          JSX => return về một block

          //Fragment

          //state cập nhật dữ liệu
          //setState()

    */
    //key:value obj
    state = {
        arrayJob:[
            {id:'123123',title:'viet',salary:'500'},
            {id:'1123',title:'vet',salary:'50'},
            {id:'1223',title:'vit',salary:'5'},
        ]
    }
    addNewJob = (job) => {
        //let currentJob = this.state.arrayJob;
        //currentJob.push(job);
        this.setState({
            arrayJob: [...this.state.arrayJob,job]
            //arrayJob:currentJob
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrayJob;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrayJob: currentJob
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <AddComponent addNewJob={this.addNewJob}/>
                <ChildComponent arrayJob={this.state.arrayJob} deleteJob={this.deleteJob}/>
            </React.Fragment>
        );
    }
}

export default MyComponent;