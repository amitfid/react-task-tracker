import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'hey1',
        day: 'this is when this happened'
    },
    {
        id: 2,
        text: 'hey2',
        day: 'this is when that happened'
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
