const Feedback = ({ rightAnswer, userAnswer, feedback, handleNextClick }) => {
    return (
        <section>
            <div>
              <section>
                <h3>Correct answer</h3>
                <p>{rightAnswer}</p>
              </section>
              <section>
                <h3>Your answer</h3>
                <p>{userAnswer}</p>
              </section>
            </div>
            <section>
              <h3>AI Feedback</h3>
              <p>{feedback}</p>
            </section>
            <button type="button" onClick={handleNextClick}>Next Flashcard</button>
          </section>
    )
}

export default Feedback