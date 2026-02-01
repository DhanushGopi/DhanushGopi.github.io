export default function FilterBtn(props){
    return(
        <button onClick={props.click}
                className={`myportfolio-filterbtn ${props.isActive ? 'myportfolio-filterbtn-active' : ''}`}>
                    {props.btntext}
                </button>
    )
}