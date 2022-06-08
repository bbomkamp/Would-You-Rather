import React, { Component } from "react";
import Box from '@mui/material/Box';
import {connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import './Signin.css';
import Navbar from "./Navbar";
import Home from "./Home"

class Signin extends Component {


    handleSelect = (e,id) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(id))
    }

    
      
    render(){

    
    const { users } = this.props
    const { authedUser } = this.props

    if(authedUser == null){
        return (
        <div className='main-view-container'>
            <h1 className='title'>
               Welcome To Would You Rather! 
            </h1>
            
            <Box
                sx={{
                    width: 400,
                    height: 400,
                    backgroundColor: 'purple',
                    borderRadius: 10,
                }}>
                    
                <div className='signin-grid-item'>
                    Choose a User
                </div>
                <div>


                <ul>
                  {this.props.userIds.map((id) =>
                  <li key={id} onClick={(e) => this.handleSelect(e,users[id].id)} className='btn'>
                     <img src={users[id].avatarURL} alt={``} className='avatar'/> {users[id].name}
                  </li>
                  )}
              </ul>



                </div>
            </Box>
        </div>
    )
    }else{
        return(
            <div>
                  
            <div> <Navbar /> </div>
           
            <div> <Home /> </div>
           
        </div>
    )
}
}}

function mapStateToProps ({authedUser, users}){
    return{
        authedUser,
        users,
        userIds: Object.keys(users),
     
    }
}

export default connect(mapStateToProps)(Signin)