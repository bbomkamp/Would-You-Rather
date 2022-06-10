import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import Signin from './Signin'
import NotFound from './NotFound'
import { Switch } from 'react-router-dom'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'



class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        {this.props.loading === true ? <Signin /> :
                            <div>
                                <Switch>
                                    <Route path='/' exact component={Home} />
                                    <Route path='/question/:id' component={QuestionPage} />
                                    <Route path='/new' component={NewQuestion} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                                    <Route path='*' component={NotFound} />
                                </Switch>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)