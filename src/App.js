import React from 'react'
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import data from './sampleData'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from "./components/pages/PageNotFound"

class App extends React.Component {
  state = {
    boards: []
  }
  componentDidMount() {
    this.setState({ boards: data.boards })
  }
  createNewBoard = board => {
    console.log(`Receiving board: ${board}`)
    this.setState({ boards: [...this.state.boards, board]})
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={PageNotFound}/>
          <Route path="/board" component={Board}/>
          <Route component={PageNotFound}/>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
