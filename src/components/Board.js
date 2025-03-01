import React from 'react'
import List from './List'
import data from '../sampleData'

class Board extends React.Component {
  state = {
    currentLists: []
  }
  addBoardInput = React.createRef()
  componentDidMount() {
    this.setState({ currentLists: data.lists})
  }
  createNewList = (e) => {
    e.preventDefault()
    const list = {
      id: Math.random(),
      title: this.addBoardInput.current.value,
      board: 300,
      createdAt: new Date(),
      cards: [
        {
          id: 1,
          text: "Card 1"
        },
        {
          id: 2,
          text: "Card 2"
        }
      ]
    }
    if (list.title) {
      this.setState({ currentLists: [...this.state.currentLists, list] })
      this.addBoardInput.current.value = ''
    }
  }
  render() {
    return (
      <div>
        <div className="lists-wrapper">
          {
            Object.keys(this.state.currentLists).map(key => (
              <List
                key={this.state.currentLists[key].id}
                list={this.state.currentLists[key]}
              />
            ))
          }
        </div>
        <form onSubmit={this.createNewList}
              className="new-list-wrapper">
          <input type="text"
                 ref={this.addBoardInput}
                 name="name"
                 placeholder=" + New List"
          />

        </form>
      </div>
    )
  }
}

export default Board
