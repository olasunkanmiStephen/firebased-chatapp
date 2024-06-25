import React from 'react'
import '../Chatlist/adduser.css'

const Adduser = () => {
  return (
    <div className='addUser'>
        <form action="">
            <input type="text" placeholder='Username' name='username' />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="/avatar.png" alt="" />
                <span>Steph Olasunkanmi</span>
            </div>
            <button>Add user</button>
        </div>
    </div>
    
  )
}

export default Adduser