import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { questionFormatted, formatDate, checkAnswers } from '../helpers/helpers'
import { Link, withRouter } from 'react-router-dom'

class QuestionButton extends Component {


    render() {
        const { question, authedUser, users, showAnswered } = this.props

        //const { authedUser } = this.props

        const { id, timestamp, author, avatar, textOne, textTwo } = question

        console.log('Question', question)

        let yourAnswer = checkAnswers(id, users, authedUser)

        let displayQuestion = false;

        if (showAnswered === true && yourAnswer !== 0) {

            displayQuestion = true;

        }

        if (showAnswered === false && yourAnswer === 0) {
            displayQuestion = true;
        }


        if (displayQuestion) {
            return (
                <div className='center'>


                    <div className='question-frame'>

                        <div className='asked-by'>{author} Asks :  <span>Would You Rather?</span> </div>

                        <div className='question-author'> <img src={avatar} alt={`Avatar of author: ${author}`} className='large-avatar' /> </div>
                        <div className='right-results'>
                            <div>1. {textOne}</div>
                            <div className='question-separator'>or</div>
                            <div>2. {textTwo}</div>

                            <div className='question-button'>{yourAnswer !== 0 && <Link to={`/question/${id}`}> View Question </Link>}{yourAnswer === 0 && <Link to={`/question/${id}`}> Answer Question </Link>}</div>
                        </div>




                    </div>
                </div>

            )
        }
        else {
            return (<Fragment></Fragment>)
        }

    }

}

function mapStateToProps({ authedUser, users, questions }, { id, showAnswered }) {
    const question = questions[id]

    return {
        authedUser,
        users,
        question: question ? questionFormatted(question, users, authedUser) : null,
        showAnswered
    }
}

export default withRouter(connect(mapStateToProps)(QuestionButton))