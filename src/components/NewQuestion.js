import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class NewQuestion extends Component {
    state = {
        q1Text: '',
        q2Text: '',
        toHome: false,
    }

    handleChangeQ1 = (e) => {
        const q1Text = e.target.value

        this.setState(() => ({
            q1Text
        }))
    }

    handleChangeQ2 = (e) => {
        const q2Text = e.target.value

        this.setState(() => ({
            q2Text
        }))
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const { q1Text, q2Text } = this.state
        const { dispatch, id } = this.props

        //Add Dispatch to handleAddQuestion
        dispatch(handleAddQuestion(q1Text, q2Text))

        this.setState(() => ({
            q1Text: '',
            q2Text: '',
            toHome: id ? false : true,

        }))



    }

    render() {
        const { q1Text, q2Text, toHome } = this.state

        if (toHome === true) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                <Navbar />
                <Box className='box'>


                    <div className='center-h2'>Create a New Question</div>
                    <form className='new-question' onSubmit={this.handleSubmit}>
                        <div className='center'>
                            <label for='q1Text'>Would You Rather </label>
                        </div>
                        <input type='text' id='q1Text' name='q1Text' value={q1Text} maxLength={255} placeholder='Please enter your first choice' className='textarea' onChange={this.handleChangeQ1} />
                        <br />
                        <div className='center'>
                            <label for='q2Text'>Or </label>
                        </div>
                        <input type='text' id='q2Text' name='q2Text' value={q2Text} maxLength={255} placeholder='Please enter your second choice' className='textarea' onChange={this.handleChangeQ2} />
                        <br />
                        <Button
                            variant='contained'
                            type='submit'
                            disabled={q1Text === '' || q2Text === ''}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </div>
        )
    }
}

export default connect()(NewQuestion)

