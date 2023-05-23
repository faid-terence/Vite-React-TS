import Message from './Message'
import ListGroup from './components/ListGroup'


function App() {
  let items = [ 'Kigali', 'London', 'Paris', 'Brazil', 'Butare']
  let heading = "Cities"
  return <div><ListGroup items = {items} heading ={heading} /></div>
}

export default App