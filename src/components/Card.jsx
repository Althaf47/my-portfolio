import cross from '../images/circle-xmark.png'
function Card(props){
    return(
        <>
         <div className="pf-card" style={
            {
            height:props.height,
            width:props.width,
            top:props.top,
            left:props.left,
            background:props.bgColor,
            right:props.right,
         }
         }>
            <p>
                {props.content}
                <img src={cross} alt="" />
            </p>
        </div>
        </>
    )
}
export default Card;