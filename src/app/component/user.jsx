import React, {useState} from "react";
import api from '../api'
import RenderPhrase from "./searchStatus";

import Bookmark from "./bookmark";

const User = () => { 
    const [users, setUsers] = useState(api.users.fetchAll()) 
    let [usersLength, setUsersLength] = useState(users.length-1) 
    const handleDelete = (id) => {
        setUsers(prevState=>prevState.filter(user=>user!==id))
        setUsersLength(usersLength-1)  
        console.log(usersLength)
         
    }
   
    return  (
    users.map(user=> 
               
        { return  (
           
        <>
           
            <tr>
                <td>{user.name}</td>
                <td>{
                user.qualities.map((item) => {
                    return <span className={'badge bg-' + item.color}>{item.name}</span>;
                  })}
                
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td> <Bookmark/> </td>
                <td>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>handleDelete(user)
                }>
                Удалить
                </button>
                </td>
            </tr>                
        </>
        
        )}
    ))
}

export default User