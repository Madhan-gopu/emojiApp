import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isEmojiPresent: false,
    isWon: false,
  }

  onClickEmoji = id => {
    const {clickedEmojisList, score} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const clickedEmoji = shuffledEmojisList().find(
      eachEmoji => eachEmoji.id === id,
    )
    const isEmojiPresent = clickedEmojisList.includes(clickedEmoji)
    if (score === 12) {
      this.setState({isWon: true, isEmojiPresent: true})
    }

    if (isEmojiPresent) {
      this.setState({isEmojiPresent: true})
    } else {
      this.setState({isEmojiPresent: false})
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, clickedEmoji],
        score: prevState.score + 1,
      }))
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }

    this.setState({
      isEmojiPresent: false,
      score: 0,
      clickedEmojisList: [],
      isWon: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isEmojiPresent, isWon} = this.state

    return (
      <div className="container">
        <NavBar
          score={score}
          topScore={topScore}
          isEmojiPresent={isEmojiPresent}
        />
        <div className="emoji-container">
          {isEmojiPresent ? (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              playAgain={this.playAgain}
            />
          ) : (
            emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
