import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

//export default function Nav () {
class Nav extends Component {
  logoutUser = (e) => {
    const {dispatch} = this.props
    dispatch(setAuthedUser(null))
  }
  render () {
    return (
      <nav className='nav'>
        <div className="leftNav">
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                My Reads
              </NavLink>
            </li>
            <li>
              <NavLink to='/library' activeClassName='active'>
                Library
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                Add Book
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="rightNav">
            <ul>
            {(this.props.authedUser === null)? null: 
              <li>Hello {this.props.authedUser}</li>
            }
            <li>
              {
                this.props.loading?
                  <NavLink to='/login' activeClassName='active'>
                    Log in
                  </NavLink>
                  :<div onClick={this.logoutUser}>Logout</div>
              }
            </li>
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)