function Circle(props){
    return(
        <>
          <div className={`bg-circle ${props.class}`} style=
          {
            {height:props.height,
             width:props.width,
             backgroundColor:props.bgColor,
             opacity:props.opacity,
             top:props.top,
             left:props.left
            }
            
            }>

          </div>
        </>
    )
}
export default Circle;