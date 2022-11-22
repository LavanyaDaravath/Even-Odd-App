// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  clickButton = () => {
    console.log(`click button `)
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state

    const result = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="text">Count is {result}</p>
          <button type="button" className="button" onClick={this.clickButton}>
            Increment
          </button>
          <p className="text1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
