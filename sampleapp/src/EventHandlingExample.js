import './EventHandlingExample.css'

function EventHandlingExample(){
    const buttonClick = () => {
        console.log("Button Clicked");
    }
    return (
        // <button onMouseOver={buttonClick()}>
              <button onMouseOver={buttonClick}>
            Button Text
        </button>
    )
}
export default EventHandlingExample;