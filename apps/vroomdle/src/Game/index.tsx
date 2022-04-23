import { Component, createSignal, onMount, Show } from 'solid-js'
import Guesser from '../Guesser'
import Carousel from '../Carousel'
import { gameStyle } from './Game.css'
import { End } from '../End'

const Game: Component = () => {
    const suggestions = ['Silverstone', 'Spa Francochamps', 'Monza', 'Imola']
    const answer = 'Spa Francochamps'

    const [images, setImages] = createSignal<string[]>([])
    const [clues, setClues] = createSignal<string[]>([])
    const [tries, setTries] = createSignal(0)
    const [guess, setGuess] = createSignal('')
    const [active, setActive] = createSignal(true)

    onMount(async () => {
        const res = await fetch(`http://localhost:3333/api/games`)

        const game = await res.json()

        setImages(
            game.images.map(
                (img: number) => `http://localhost:3333/api/images/${img}`
            )
        )
        setClues((prev) => [...prev, images().shift()!])
    })

    const handleGuess = (g: string) => {
        setTries((prev) => ++prev)
        setGuess(g)

        if (g === answer || tries() >= 6) {
            setActive(false)
            return
        }

        setClues((prev) => [...prev, images().shift()!])
    }

    return (
        <div class={gameStyle}>
            <Carousel images={clues()} />
            <Show
                when={!active()}
                fallback={
                    <Guesser onGuess={handleGuess} suggestions={suggestions} />
                }
            >
                <End answer={answer} guess={guess()} tries={tries()} />
            </Show>
        </div>
    )
}

export default Game
