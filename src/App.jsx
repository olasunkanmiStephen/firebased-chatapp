import Chat from "./Component/chat/Chat"
import Details from "./Component/details/Details"
import List from "./Component/list/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App