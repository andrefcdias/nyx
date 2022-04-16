import { Component, createSignal, Show } from 'solid-js'
import Guesser from '../Guesser'
import Carousel from '../Carousel'
import { gameStyle } from './Game.css'

import spa1 from './images/spa_1_unknown.jpg'
import spa2 from './images/spa_2_unknown.jpg'
import spa3 from './images/spa_3_les_combes.jpg'
import spa4 from './images/spa_4_les_combes.jpg'
import spa5 from './images/spa_5_eau_rouge.jpg'
import spa6 from './images/spa_6_layout.png'
import { End } from '../End'

const Game: Component = () => {
    const images = [spa1, spa2, spa3, spa4, spa5, spa6]
    const suggestions = ['Silverstone', 'Spa Francochamps', 'Monza', 'Imola']
    const answer = "Spa Francochamps"

    const [clues, setClues] = createSignal<string[]>([images.shift()!])
    const [tries, setTries] = createSignal(0)
    const [guess, setGuess] = createSignal('')
    const [active, setActive] = createSignal(true)

    const handleGuess = (g: string) => {
        setTries((prev) => ++prev)
        setGuess(g)

        if (g === answer || tries() >= 6) {
            setActive(false)
            return
        }

        setClues((prev) => [...prev, images.shift()!])
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
