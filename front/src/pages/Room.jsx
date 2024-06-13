import { useEffect, useState } from "react"
import data from '../cards.json'

const Room = () => {
    const [cardNum, setCardNum] = useState(0)
    const [flashcard, setFlashcard] = useState(data.cards[cardNum])

    useEffect(() => {
        setFlashcard(data.cards[cardNum])
    }, [cardNum])

    const handleClick = () => {
      setCardNum(cardNum + 1)
    }

    return (
        <div>
          <h1>ROOM 1</h1>
          <h2>{flashcard.question}</h2>
          <textarea id="answer" cols={50} rows={15}></textarea>
          <button type="button">Submit</button>
          <button type="button" onClick={handleClick}>Next</button>
        </div>
    )
}

export default Room