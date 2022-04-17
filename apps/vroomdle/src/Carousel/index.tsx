import { Component, createEffect, createSignal, For } from 'solid-js'
import { buttonListStyle, carouselStyle, imageStyle } from './Carousel.css'

interface CarouselProps {
    images: string[]
}
const Carousel: Component<CarouselProps> = (props) => {
    const [images, setImages] = createSignal(props.images)
    const [index, setIndex] = createSignal(0)

    createEffect(() => {
        setImages(props.images)
        setIndex(props.images.length - 1)
    })

    return (
        <div class={carouselStyle}>
            <img class={imageStyle} src={images()[index()]} />
            <div class={buttonListStyle}>
                <For each={images()}>
                    {(_, idx) => (
                        <button onClick={() => setIndex(idx())}>{idx() + 1}</button>
                    )}
                </For>
            </div>
        </div>
    )
}

export default Carousel
