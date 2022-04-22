import { useDispatch, useSelector } from 'react-redux';

export function FavoritePlaces(props) {
  
  const list = props.list
     return(
         <ul>
          {list}
         </ul>
     )
 }