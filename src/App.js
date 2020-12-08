import './ListItem.css';
import './App.css';
import ListItem from "./components/ListItem"

function App() {
  const list = ['sammie', 'whammie', 'blammie', 'hammie']
  const listItems = list.map((listItems, index) => {
    return <ListItem doThis={listItems} key={`list-item-${index}`} />
  })
  
  return (
    <div>
      <header>My List</header>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
