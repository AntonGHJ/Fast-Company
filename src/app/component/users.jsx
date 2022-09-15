import React, {useState} from "react";
import api from '../api'
import RenderPhrase from "./searchStatus";
import User from "./user";

const Users = ()=> {   
    const [users, setUsers] = useState(api.users.fetchAll())      
    
    const [tableHead, setTableHead] = useState(['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка'])
    if (users.length > 0)
        { return (  
        <>     
        <div> <RenderPhrase length = {users.length}/> </div>       
        <table className="table m-2">        
    <thead>    
      <tr>
        {tableHead.map(thead=>(<th>{thead}</th>))}
        </tr>        
    </thead>
    <tbody>
        <User list = {users}/>
        
    </tbody>
  </table>
  </>
  )  
}
    if (users.length === 0) {return (    
    <span><RenderPhrase/></span>    
    )}    
}

export default Users