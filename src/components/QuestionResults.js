import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionFormatted, checkAnswers } from '../helpers/helpers'
import Box from '@mui/material/Box';

class QuestionResults extends Component {

    render() {

        const { questionFormatted, authedUser, users, id } = this.props

        const { author, avatar, textOne, textTwo, oneCount, twoCount, totalCount } = questionFormatted

        let questionOnePercent = Math.trunc(((oneCount / totalCount) * 100)) + '%'
        let questionTwoPercent = Math.trunc(((twoCount / totalCount) * 100)) + '%'

        let usersChoice = checkAnswers(id, users, authedUser)


        return (
            <Box className='box'>
                <div className='question-results' >
                    <div className='asked-by'>Asked By {author}</div>
                    <div className='left-results' > <img src={avatar} alt={``} className='large-avatar' /> </div>
                    <div className='right-results' >
                        <h2>Results:</h2>
                        <div className='question-results-box'>Would you rather {textOne}?

                            <span style={{ width: questionOnePercent }}>{questionOnePercent}</span>

                            <div className='center'>{oneCount} out of {totalCount} votes</div>
                        </div>
                        <div className='question-results-box'>Would you rather {textTwo}?

                            <span style={{ width: questionTwoPercent }}><span>{questionTwoPercent}</span></span>

                            <div className='center'>{twoCount} out of {totalCount} votes</div>
                        </div>
                        <div>
                            {usersChoice !== 0 && <span>  Your Choice: {usersChoice === 1 && <span>{textOne}</span>}{usersChoice === 2 && <span>{textTwo}</span>}</span>}
                        </div>

                    </div>

                </div>
            </Box>
        )

    }
}

function mapStateToProps({ authedUser, users }, props) {
    return {
        questionFormatted: props.question ? questionFormatted(props.question, users, authedUser) : null,
        authedUser,
        users,
        id: props.question.id
    }
}

export default connect(mapStateToProps)(QuestionResults)