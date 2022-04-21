import { useDispatch, useSelector } from 'react-redux';
import { RemoveElement } from './removeElement';

export function FavoritePlaces(props) {
  
  const list = props.list
     return(
         <ul>
          {list}
         </ul>
     )
 }