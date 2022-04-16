import { Component, Show } from 'solid-js'

interface EndProps {
    answer: string
    guess: string
    tries: number
}
export const End: Component<EndProps> = (props) => {
    return (
        <div>
            <p>The answer was: {props.answer}</p>
            <p>
                <Show
                    when={props.answer === props.guess}
                    fallback="Better luck next time!"
                >
                    You guessed it in {props.tries}{' '}
                    {props.tries == 1 ? 'try' : 'tries'}!
                </Show>
            </p>
        </div>
    )
}
