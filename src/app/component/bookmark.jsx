import React, {useState} from "react";

const Bookmark = () => {
    const [isAdded, setAdded] = useState("false");  
        const handleBookmark = () => {            
            setAdded(isAdded=>!isAdded);            
        }    
       return  <i className={!isAdded ? "bi-bookmark-star-fill" : "bi-bookmark-star"} onClick={handleBookmark}></i>     // <i className='bi-bookmark' onClick={handleBookmark}></i>
    }
    
export default Bookmark