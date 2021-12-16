import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'hey1',
        day: 'this is when this happened',
        reminder: true
    },
    {
        id: 2,
        text: 'hey2',
        day: 'this is when that happened',
        reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
        { ...task, reminder: !task.reminder } 
      : 
        task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No tasks'
        )}
    </div>
  );
}

export default App;
