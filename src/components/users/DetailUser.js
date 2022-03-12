import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends Component {
    state = {
        user:[]
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${(id)}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : ''
            })
        }
    }

    render() {
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <div>
                <div>User Info</div>
                {isEmptyObj === false &&
                    <div>
                        <div>Name: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt=""/>
                        </div>
                        <button onClick={()=> this.handleBackUser()}>back</button>
                    </div>
                }
            </div>
        );
    }

    handleBackUser = () => {
        this.props.history.push('/user')
    }
}

export default withRouter(DetailUser);