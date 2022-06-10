import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { questionFormatted } from '../helpers/helpers'
import { answerQuestionHelper } from '../actions/questions'
import Navbar from './Navbar'
import QuestionResults from './QuestionResults'
import NotFound from './NotFound'
import Box from '@mui/material/Box';



class QuestionPage extends Component {

    constructor() {
        super();
        this.state = {
            choice: '',
            answered: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ choice: event.target.value });
    }

    handleSubmit(event) {
        const { dispatch, question } = this.props
        event.preventDefault();
        dispatch(answerQuestionHelper(question, this.state.choice))

    }

    render() {

        const { question } = this.props
        const { authedUser } = this.props

        if (typeof (question) == "undefined") {
            return (
                <div>
                    <div> <NotFound /></div>
                </div>
            )
        }

        const { questionFormatted } = this.props
        const { author, avatar } = questionFormatted

        let answerFlag = false;

        if (question === null) {
            return <p> Whoops! Something Went Wrong. This Question dosen't exsit</p>
        }

        if (question.optionOne.votes.includes(authedUser)) {
            answerFlag = true;
        }
        else if (question.optionTwo.votes.includes(authedUser)) {
            answerFlag = true;
        }


        if (answerFlag !== true) {
            return (
                <Fragment>
                    <div> <Navbar /> </div>
                    <Box className='box'>
                        <div className='question-results' >

                            <div className='asked-by'>{author} Asks: </div>


                            <div className='left-results' > <img src={avatar} alt={`Avatar of author: ${author}`} className='large-avatar' /> </div>
                            <div className='right-results' >
                                <div className='question-inner-box'>
                                    <form onSubmit={this.handleSubmit}>
                                        <h3> Would You Rather?</h3>
                                        <ul>
                                            <li>
                                                <label><input name='options' type='radio' value='optionOne' onChange={this.handleChange} />{question.optionOne.text}?</label>
                                            </li>

                                            <li>
                                                <label><input name='options' type='radio' value='optionTwo' onChange={this.handleChange} />{question.optionTwo.text}?</label>
                                            </li>
                                        </ul>

                                        <button type="submit" >Make your choice</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </Box>
                </Fragment>
            )

        } else {
            return (
                <div>
                    <div> <Navbar /> </div>
                    <div> <QuestionResults question={question} /></div>
                </div>
            )
        }
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]

    console.log("Question Page: ", question);

    return {
        questionFormatted: question ? questionFormatted(question, users, authedUser) : null,
        authedUser,
        question
    }


}

export default withRouter(connect(mapStateToProps)(QuestionPage))

