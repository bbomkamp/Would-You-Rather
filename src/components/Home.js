import React, { Component } from 'react'
import { connect } from "react-redux"
import QuestionButton from './QuestionButton'
import Navbar from './Navbar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class HomePage extends Component {

    state = {
        showAnswered: false
    }

    handleShowAnswered = (e) => {

        let newShowAnswered = false

        if (this.state.showAnswered === true) {
            newShowAnswered = false
        } else {
            newShowAnswered = true
        }

        this.setState(() => ({
            showAnswered: newShowAnswered
        }))
    }

    render() {
        return (
            <div>
                <Navbar />
                <Box className='box'>
                    <div className='center'>
                        <Button variant="contained" onClick={this.handleShowAnswered} disabled={this.state.showAnswered} className='toggle-answered'>Answered Questions</Button>
                        <Button variant="contained" onClick={this.handleShowAnswered} disabled={!this.state.showAnswered} className='toggle-answered'>Unanswered Questions</Button>
                    </div>
                    <div className='question-list'>
                        {this.props.questionIds.map((id) => (
                            <div key={id} className='question-box'>
                                <QuestionButton id={id} showAnswered={this.state.showAnswered} />
                            </div>
                        ))}
                    </div>
                </Box>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {

    let questionsSorted = Object.values(questions).sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);
    let ids = questionsSorted.map(a => a.id);


    return {
        questionIds: ids
    }
}

export default connect(mapStateToProps)(HomePage)