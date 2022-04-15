import { FunctionalComponent, h } from 'preact'
import { useMemo, useState } from 'preact/hooks'
import Converter from '../../components/converter'
import { getLatestRates, Rates } from '../../services/currencies'
import { homeStyle } from './home.css'

const Home: FunctionalComponent = () => {
    const [apiKey, setApiKey] = useState('')
    const [rates, setRates] = useState<Rates>()

    useMemo(() => {
        // if (apiKey && apiKey.length == 32)
        getLatestRates(apiKey).then(setRates)
    }, [apiKey])

    return (
        <div class={homeStyle}>
            {/* <p><label>API key <input value={apiKey} onChange={(event) => setApiKey(event.currentTarget.value)} /></label></p> */}
            {rates && <Converter rates={rates} />}
        </div>
    )
}

export default Home
