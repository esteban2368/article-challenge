
const Tooltip = ( { text, icons, trigger, children } ) =>{
    return (
        trigger == 'button' && <button>{children}</button>
    )
}

export default Tooltip