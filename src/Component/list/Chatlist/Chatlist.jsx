import React, { useState } from 'react'
import '../Chatlist/chatlist.css'
import Adduser from './Adduser'

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false)


  return (
    <div className='chatlist'>
        <div className="search">
            <div className="searchbar">
                <img src="/search.png" alt="" />
                <input type="text" placeholder='search'/>
            </div>
            <img src={addMode? "/minus.png" : "/plus.png"} alt="" className='plus' onClick={()=> setAddMode ((prev) => !prev)}/>
        </div>
        <div className="item">
            <img src="/avatar.png" alt="" />
            <div className="texts">
                <span>Steph Olasunkanmi</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="/avatar.png" alt="" />
            <div className="texts">
                <span>Steph Olasunkanmi</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="/avatar.png" alt="" />
            <div className="texts">
                <span>Steph Olasunkanmi</span>
                <p>Hello</p>
            </div>
        </div>
        {addMode && <Adduser/>}
    </div>
  )
}

export default Chatlist