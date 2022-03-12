import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Color from "./HOC/Color";
import logo from '../assets/images/1.jpg'
import {connect} from "react-redux";
import Connect from "react-redux/lib/connect/connect";
import {findAllByDisplayValue} from "@testing-library/react";
import {type} from "@testing-library/user-event/dist/type";

class Home extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         //this.props.history.push('/todo')
    //     },3000)
    // }
    //HOC
    handleDelete =  (user) => {
        this.props.deleteUserRedux(user)
    }
    render() {
        console.log(this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <div>
                <img src={logo} height={100} width={100}  alt=""/>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <button onClick={() => this.handleDelete(item)}>delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux : state.users
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      deleteUserRedux :(userDelete) => dispatch({type:'DELETE_USER',payload:userDelete})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);