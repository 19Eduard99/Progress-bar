import { Component } from 'react'
import Progress from './components/Progress'

export default class App extends Component {
  render() {
    return (
      <Progress percentage={40} />
    )
  }
}

