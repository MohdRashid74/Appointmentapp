import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {titleInput: '', dateInput: '', appoinmentList: []}

  renderaddList = () => {
    const {appoinmentList} = this.state

    return appoinmentList.map(eachItem => (
      <AppointmentItem
        key={eachItem.id}
        Details={eachItem}
        toggle={this.togglestar}
      />
    ))
  }

  addSubmitButton = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newContact = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isLiked: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appoinmentList, newContact],
      titleInput: '',
      dateInput: '',
    }))
  }

  onchangeInputValue = event => {
    this.setState({titleInput: event.target.value})
  }

  onchangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {titleInput, dateInput, appoinmentList} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="row-container">
            <form className="input-container" onSubmit={this.addSubmitButton}>
              <span className="pargraph">title</span>
              <input
                className="input"
                onSubmit={this.submitData}
                type="text"
                placeholder="Title"
                onChange={this.onchangeInputValue}
                value={titleInput}
              />
              <span className="pargraph">Date</span>
              <input
                type="date"
                className="textarea"
                onChange={this.onchangeDateInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="image"
              alt=" appointments"
            />
          </div>
          <hr />
          <div className="appointment-container">
            <p>Appointment</p>
            <button type="button" className="button-start">
              Start
            </button>
          </div>
          <ul className="un-list">{this.renderaddList()}</ul>
        </div>
      </div>
    )
  }
}
export default Appointments
