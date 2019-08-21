// libraries
import React, {Component} from 'react'
import {connect} from 'react-redux'

class AddBook extends Component {
    render () {
        return (
            <div>Need to Add Books here.</div>
        );
    }
}

const mapStateToProps = ({books, myReads, authedUser}) => ({books, myReads, authedUser})

export default connect(mapStateToProps)(AddBook)