import React, {Component} from 'react';
class ChildComponent extends Component {
    state = {
        showJobs : false
    }
    render() {
        let { arrayJob } = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? 'showJobs = false' : 'showJobs = true';
        return (
            <div>
                {showJobs === false ?
                    <div>
                    <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                    :
                    <>
                        <div className="jobList">
                            {arrayJob.map((item,index) => {
                                return(
                                    <div key={item.id} >
                                        {item.title} - {item.salary}$ <span><button onClick={()=>this.handleDelete(item)}>delete</button></span>
                                    </div>

                                )
                            })}
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>hide</button></div>
                    </>
                }
            </div>
        );
    }

    handleShowHide = () => {
        this.setState({
            showJobs : !this.state.showJobs
        })
    }

    handleDelete= (job) => {
        this.props.deleteJob(job)
    }
}

//sử dụng funtion
// const ChildComponent = (props) => {
//     let { name,age,address,arrayJob } = props;
//     return (
//             <div>
//                 child component : {name} - age:{age} - address:{address}
//                 <div className="jobList">
//
//                     {arrayJob.map((item) => {
//                         return(
//                             <div key={item.id} >
//                                 {item.title} - {item.salary}$
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//   )
// }
export default ChildComponent;