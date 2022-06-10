import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addQuestionHelper } from '../actions/questions'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class NewQuestion extends Component {
    state = {
        firstOption: '',
        secondOption: '',
        home: false,
    }

    handleChangeQ1 = (e) => {
        const firstOption = e.target.value

        this.setState(() => ({
            firstOption
        }))
    }

    handleChangeQ2 = (e) => {
        const secondOption = e.target.value

        this.setState(() => ({
            secondOption
        }))
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const { firstOption, secondOption } = this.state
        const { dispatch, id } = this.props

        //Add Dispatch to addQuestionHelper
        dispatch(addQuestionHelper(firstOption, secondOption))

        this.setState(() => ({
            firstOption: '',
            secondOption: '',
            home: id ? false : true,

        }))



    }

    render() {
        const { firstOption, secondOption, home } = this.state

        if (home === true) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                <Navbar />
                <Box className='box'>


                    <div className='center-h2'>Create a New Question</div>
                    <form className='new-question' onSubmit={this.handleSubmit}>
                        <div className='center'>
                            <label for='firstOption'>Would You Rather </label>
                        </div>
                        <input type='text' id='firstOption' name='firstOption' value={firstOption} maxLength={255} placeholder='Please enter your first choice' className='textarea' onChange={this.handleChangeQ1} />
                        <br />
                        <div className='center'>
                            <label for='secondOption'>Or </label>
                        </div>
                        <input type='text' id='secondOption' name='secondOption' value={secondOption} maxLength={255} placeholder='Please enter your second choice' className='textarea' onChange={this.handleChangeQ2} />
                        <br />
                        <Button
                            variant='contained'
                            type='submit'
                            disabled={firstOption === '' || secondOption === ''}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </div>
        )
    }
}

export default connect()(NewQuestion)

