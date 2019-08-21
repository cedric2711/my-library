// libraries
import React, {Component} from 'react'
import {connect} from 'react-redux'

class MyReads extends Component {
    render () {
        return (
            <div>Need to display books i'm interested in.</div>
        );
    }
}

const mapStateToProps = ({books, myReads, authedUser}) => ({books, myReads, authedUser})

export default connect(mapStateToProps)(MyReads)