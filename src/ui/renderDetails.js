export function RenderDetails(props){
    
    const toggleState = props.toggleState;
    return(
    <div className={toggleState === 3 ? "active-page" : "page"}>
        <div className="display_left" id='showDetails'>
            RENDERDETAILS
       </div>
    </div>
    )
}