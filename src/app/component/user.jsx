import React, {useState} from "react";

import Bookmark from "./bookmark";

const User = (props) => { 
    const [users, setUsers] = useState(props.list) 
    console.log(props.list)
    let [usersLength, setUsersLength] = useState(props.list) 
    
    const handleDelete = (id) => {
        setUsers(prevState=>prevState.filter(user=>user!==id))
        setUsersLength(props.list.shift())
           
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
                <button className="btn btn-danger btn-sm m-2" onClick={()=>handleDelete(user)}>
                Удалить
                </button>
                </td>
            </tr>                
        </>
        )}
    ))
}

export default User