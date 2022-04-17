import { Component, createSignal, For } from 'solid-js'
import { guesserStyle } from './Guesser.css'

interface GuesserProps {
    suggestions: string[]
    onGuess: (guess: string) => void
}
const Guesser: Component<GuesserProps> = (props) => {
    const [guess, setGuess] = createSignal('')
    const [guesses, setGuesses] = createSignal<string[]>([])

    const submitGuess = () => {
        props.onGuess(guess())
        setGuesses((prev) => [...prev, guess()])
        setGuess('')
    }

    return (
        <div class={guesserStyle}>
            <For each={guesses()}>{(g) => <input disabled value={g} />}</For>
            <input
                value={guess()}
                onChange={(event) => {
                    setGuess(event.currentTarget.value)
                }}
                onKeyUp={(event) => {
                    if (event.key == 'Enter') submitGuess()
                }}
            />
            <button onClick={() => submitGuess()}>Guess</button>
        </div>
    )
}

export default Guesser
