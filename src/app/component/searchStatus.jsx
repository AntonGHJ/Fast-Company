import React, {useState} from "react"

const RenderPhrase = (props) => {    
    
    const [users, setUsers] = useState(props)
    console.log(props)
    console.log(users)
        
    if (users.length > 4 && users.length <= 12)    
    {return (
    < h1 ><span className="badge m-2 bg-primary">{users.length} человек тусанут с тобой</span></h1>
     )
    }
    if (users.length > 1 && users.length < 5) {return  (
    <h1> <span className="badge m-2 bg-primary">{users.length} человека тусанет с тобой</span></h1>
)}
    if (users.length === 1) 
    {return ( <h1> <span className="badge m-2 bg-primary">{users.length} человек тусанет с тобой</span></h1>)}
    else {
        return <h2> <span className="badge m-2 bg-warning">Никто не тусанет с тобой</span></h2>
    }    
}

export default RenderPhrase
    