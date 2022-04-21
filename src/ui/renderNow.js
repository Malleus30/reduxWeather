export function RenderNow(props){
   const onLike = () =>{
       alert('liked');
   }
    const toggleState = props.toggleState;
      return (
       <div className={toggleState === 1 ? "active-page" : "page"}>
         <div className="display_left" id='showNow'>
                <div className="forPosition">
                <div className="temp"><p className='bigNumber'>23</p></div>
                <div className="bigCloudPicture"><img className='bigCloudIcon' src={"./img/big_cloud.svg" } alt={'big'} /></div>
                <div className="cityName"><p className="text smalSityName"></p>city</div>
                <div onClick={ () => onLike()} className="heart_picture"><img src="./img/heart.svg" alt="heart" /></div>
            </div>
          </div>
       </div> 
      )
  }