import './ColorCard.css'
function ColorCard({title,color}){
    // props = {title,color}
    return (
        <div className="color-box" style={{backgroundColor:color}}>
            {title}
        </div>
    )
}
export default ColorCard