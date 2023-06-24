// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  const code = isWon ? (
    <div className="w-l-container">
      <div className="w-l-text-container">
        <h1 className="text-1">You Won</h1>
        <p className="text-2">Best Score</p>
        <p className="text-3">12/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="w-l-image"
      />
    </div>
  ) : (
    <div className="w-l-container">
      <div className="w-l-text-container">
        <h1 className="text-1">You Lose</h1>
        <p className="text-2">Score</p>
        <p className="text-3">{score}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="w-l-image"
      />
    </div>
  )

  return code
}

export default WinOrLoseCard
