import React, {Component} from 'react';
import axios from "axios";
import {withRouter} from "react-router-dom";
class ListUser extends Component {
    state = {
        listUsers: []
    }
     async componentDidMount() {
        // axios.get('https://reqres.in/api/users')
        //     .then(res => {
        //         console.log(res)
        //     })
         let res = await axios.get('https://reqres.in/api/users')
         this.setState({
             listUsers:res && res.data && res.data.data ? res.data.data : []
         })
         //console.log(res.data.data)
    }

    render() {
        let {listUsers} = this.state;
        return (
            <div className="list-user">
                <div className="title">
                    List User <hr/>
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map( (item,index) =>{
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name} <button onClick={()=> this.handleViewUser(item)}>view</button> <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    handleViewUser = (user) => {
        this.props.history.push('/user/' + user.id)
    }
}

export default withRouter(ListUser);