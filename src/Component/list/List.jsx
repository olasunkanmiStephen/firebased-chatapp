import React from 'react'
import '../list/List.css'
import Userinfo from './userInfo/Userinfo'
import Chatlist from './Chatlist/Chatlist'

const List = () => {
  return (
    <div className='list'>
        <Userinfo/>
        <Chatlist/>
    </div>
  )
}

export default List