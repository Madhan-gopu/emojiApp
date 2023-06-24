// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmojiButton = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list">
      <button type="button" className="button" onClick={onClickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
