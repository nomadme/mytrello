import React from 'react'
import BoardPreview from "../BoardPreview"
import PropTypes from 'prop-types'
import CreateBoard from "../CreateBoard"

class Home extends React.Component {
  render() {
    return (
      <div>
        <CreateBoard createNewBoard={this.props.createNewBoard}/>
        <div className="board-preview-wrapper">
          {
            Object.keys(this.props.boards).map(key => (
              <BoardPreview
                key={key}
                board={this.props.boards[key]}/>
            ))
          }
        </div>
      </div>
    )
  }
}
Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired
}
export default Home


// <div key={board.id}>
//   <span>{board.id}</span>
// <h3>{board.title}</h3>
// <p>{board.background}</p>
// </div>

