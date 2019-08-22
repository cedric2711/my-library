// libraries
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

// CSS
import './App.css'

// Components
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";
import MyReads from "./MyReads";
import Login from "./Login";
import Library from './Library';
import AddBook from './AddBook';
import ErrorPage from './ErrorPage';

// Methods
import { handleInitialData } from '../actions/shared'

class App extends React.Component {

    /**
     * @description Lifecycle events just called after component is inserted into DOM. We will fetch initial data here which we 
     * need for the application like users and books.
     */
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitialData())
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/** Navigation component to make sure we will display Navigation Bar always*/}
                    <Nav/>
                    {/** Let's render different components based on the path.*/}
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <PrivateRoute exact path='/' component={MyReads}/>
                        <PrivateRoute exact path='/library' component={Library}/>
                        <PrivateRoute exact path='/add' component={AddBook}/>
                        <PrivateRoute component={ErrorPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect()(App)