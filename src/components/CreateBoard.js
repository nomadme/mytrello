import React from 'react'
import PropTypes from 'prop-types'

class CreateBoard extends React.Component {
  state = {
    title: '',
    background: '#80ccff'
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const board = {
      title: this.state.title,
      background:  this.state.background,
      createdAt: new Date(),
      user: 'foo123'
    }

    if (board.title && board.background) {
      this.props.createNewBoard(board)
    }
  }
  render() {
    return (
      <form action="" className="create-board-wrapper" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Board name"
          onChange={ (e)=>this.setState({title: e.target.value}) }
        />
        <select name="background" onChange={ (e) => this.setState({background: e.target.value} ) }>
          <option value="#80ccff">Blue</option>
          <option value="#80ffaa">Green</option>
          <option value="#f9481e">Red</option>
          <option value="#ffb3ff">Pink</option>
          <option value="#bf00ff">Purple</option>
        </select>
        <button type="submit">Create new board</button>
      </form>
    )
  }
}

CreateBoard.propTypes = {
  createNewBoard: PropTypes.func.isRequired
}
export default CreateBoard
