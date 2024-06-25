import Chat from "./Component/chat/Chat"
import Details from "./Component/details/Details"
import List from "./Component/list/List"
import Login from "./Component/login/Login"
import Notification from "./Component/Notification/Notification"

const App = () => {

  const user = true;
  return (
    <div className='container'>
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Details/>
          </>
        ) : (
          <Login/>
        )}
        <Notification/>
    </div>
  )
}

export default App


