// libraries
import React, {Component} from 'react'
import {connect} from 'react-redux'

class Library extends Component {
    render () {
        return (
            <div>Need to display all the books here.</div>
        );
    }
}

const mapStateToProps = ({books, myReads, authedUser}) => ({books, myReads, authedUser})

export default connect(mapStateToProps)(Library)