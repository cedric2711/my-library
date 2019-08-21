import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    userChosen: false,
    userName: '',
    goToHome:false
  }
  closeModal = () =>{
    this.setState({goToHome:true})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    
    const {dispatch} = this.props
    const {userChosen, userName } = this.state
    if(userChosen){
      dispatch(setAuthedUser(userName))
    }
  }

  handleChange = (e) => {
    const userName = e.target.value
    if(e.target.value){
      this.setState(() =>({
        userChosen: true,
        userName: userName
      }))
    }
  }
  
  render() {
    const {users, authedUser}= this.props
    const {userChosen, goToHome }= this.state
    if(authedUser!==null || goToHome){
      let {referrer} = this.props.location.state ? this.props.location.state : "/";
      return <Redirect to={referrer} />
    }
    if (users === undefined || users.length=== 0) {
      return <p>Users not available</p>
    }

    return (
      <div className="loginBlock">
        <div>
          <h3 className='center'>Sign in to access your Library</h3>
          <form className='loggin-window' onSubmit={this.handleSubmit}>
            <select
              placeholder="What's happening?"
              onChange={this.handleChange}
              className=''
            >
              <option disabled selected>-- select an user --</option>
              {users.map((user) => {
                return <option value = {user.id}>{user.name}</option>
              })}
            </select>

            <button
              className='btn'
              type='submit'
              disabled={!userChosen}>
                Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser
  }
}
export default connect(mapStateToProps)(Login)