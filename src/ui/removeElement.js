export function RemoveElement(props) {
    const city = props.city;

    function clickHandler(event) {
        const tag = event.target.tagName;
            console.log(tag);
      }

      return (
    <li className="faforedPlace" onClick={clickHandler}>    
       <p className="text loadFavoriteOne">{city}</p>
       <div className="close">
        <span className="line_rotate45"></span>
        <span className="line_rotate45"></span>
       </div>
    </li>
      );
}