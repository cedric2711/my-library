// libraries
import React from 'react'
import {connect} from 'react-redux'
import ListBooks from './ListBooks';

function MyReads () {
        return (
            <div>
                <ListBooks bookType="currentlyReading" />
                <ListBooks bookType="wantToRead" />
                <ListBooks bookType="read" />
            </div>
        );
}

export default connect()(MyReads)