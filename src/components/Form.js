import React, {useState} from 'react';

const Form = (props) =>{
    const [user , setUser] = useState ({name:'', email:'', role:'' })

    const handleChanges = event =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const submitHandler = event =>{
        event.preventDefault()
        const newUsers = [...props.users, user]
        
        props.updateUsers(newUsers)
    }
    return (
        <div>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Member's Name</label>
                    <input onChange={handleChanges} id="name" name="name" value={user.name} type="text" placeholder="Name" />
                   
                    <label htmlFor="email">Member's Email</label>
                    <input onChange={handleChanges} id="email" name="email" value={user.email} type="text" placeholder="Email" />
    
                    <label htmlFor="role">Member's Role</label>
                    <input onChange={handleChanges} id="role" name="role" value={user.role} type="text" placeholder="Position" />
                   
                    <button type="submit">Add</button>
                </form>
            </div>

    )
}

export default Form