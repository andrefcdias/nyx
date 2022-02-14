import { FunctionalComponent, h } from 'preact';
import { useMemo, useState } from 'preact/hooks';
import { convertCurrency, Rates } from '../../services/currencies';
import { converterStyle } from './converter.css';

const Converter: FunctionalComponent<{ rates: Rates }> = ({ rates }) => {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")
    const [converted, setConverted] = useState(0)

    const currencies = Object.keys(rates.rates)

    const hasValidValues = (): boolean =>
        amount > 0 && fromCurrency != "" && toCurrency != ""

    const amountCallback = (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
        const value = parseInt(event.currentTarget.value)

        if (!isNaN(value))
            setAmount(value)
    }

    useMemo(() => {
        setConverted(convertCurrency(amount, fromCurrency, toCurrency, rates))
    }, [amount, fromCurrency, toCurrency])

    const currencyOptions = currencies.map(currency => <option key={currency}>{currency}</option>)
    return <div class={converterStyle}>
        <label>Amount
            <input type='number' value={amount} onChange={amountCallback} />
        </label>
        <label>From
            <select value={fromCurrency} onChange={(event) => setFromCurrency(event.currentTarget.value)}>
                {currencyOptions}
            </select>
        </label>
        <label>To
            <select value={toCurrency} onChange={(event) => setToCurrency(event.currentTarget.value)}>
                {currencyOptions}
            </select>
        </label>
        {hasValidValues() && <strong>{converted}{toCurrency}</strong>}
    </div>
};

export default Converter;
