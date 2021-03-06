import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import Grid from '@mui/material/Grid';


class Navbar extends Component {

    handleLogout = (e) => {

        e.preventDefault()
        const { dispatch } = this.props
        dispatch(clearUser())
    }

    render() {

        const { authedUser, users } = this.props
        let authedUserName = ""
        let profilePicture = ""


        if (authedUser !== null) {
            authedUserName = users[authedUser].name
            profilePicture = users[authedUser].avatarURL
        }
        else {
            return <Redirect to={'/'} />
        }
        return (
            <div className='nav-bar'>
                <Grid container>
                    <Grid item xs={4}>
                        <nav className='nav'>
                            <ul>
                                <li className='nav-button'>
                                    <NavLink to='/' exact activeClassName='active'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-button'>
                                    <NavLink to='/new' activeClassName='active'>
                                        New Question
                                    </NavLink>
                                </li>
                                <li className='nav-button'>
                                    <NavLink to='/leaderboard' activeClassName='active'>
                                        Leaderboard
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='nav-title'>
                            Would You Rather
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        {authedUserName !== "" &&
                            <div className='nav-right'>
                                <div className='nav-right' style={{ cursor: 'pointer' }} onClick={(e) => this.handleLogout(e)}>
                                    <NavLink to='/' exact activeClassName='active'>
                                        Logout
                                    </NavLink>
                                </div>
                                <div className='nav-right'> <img className='profilePicture' src={profilePicture} alt={``} /> </div>
                                <div className='nav-right' > {authedUserName} </div>
                            </div>
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users,
        userIds: Object.keys(users),
    }
}

export default connect(mapStateToProps)(Navbar)