import { useState } from "react"

interface ITitle {
    text: string
}
export const Title = ({ text }: ITitle) => {
    const hiddenTitle: boolean = text ? false : true
    return <div hidden={hiddenTitle} placeholder='title name'>{`your name is ${text}`}</div>
}

export const TestPlayround = () => {
    const [disabled, disabledSet] = useState(true)
    const buttonText: string = !disabled ? 'disable me' : 'enable me'
    const butttonHandler: () => void = () => {
        disabledSet(state => !state)
    }
    return <div>
        <input aria-label='text' disabled={disabled} />
        <button name='button-text' onClick={butttonHandler}>{buttonText}</button>
    </div>
}