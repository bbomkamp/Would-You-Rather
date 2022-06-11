import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { scoreTotal } from '../helpers/helpers'
import Box from '@mui/material/Box';


class Leaderboard extends Component {

    render() {

        const { scores } = this.props;
        
        return (
            <div>
                <Navbar />
                <Box className='box'>
                    <div className='center'>

                        <div>Leaderboard</div>

                        <div className='question-list'>
                            {scores.map((user) => (
                                
                                <div className='leaderboard-frame' key={user.name} >

                                    <div className='leaderboard-left'> <img src={user.avatar} alt={``} className='large-avatar' /> </div>
                                    <div className='leaderboard-center'>
                                        <div className='leaderboard-name'>{user.name}</div>
                                        <div className='leaderboard-count'>Answered Questions {user.answered}</div>
                                        <div className='leaderboard-count'>Created Questions {user.created}</div>
                                    </div>
                                    <div className='leaderboard-right'>
                                        <div className='leaderboard-right-inset'>
                                            <div className='score-title'>Score </div>
                                            <div className='score'>
                                                <div className='score-value'>{user.score} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {

    return {
        scores: scoreTotal(users),
        authedUser,
    }
}



export default withRouter(connect(mapStateToProps)(Leaderboard))