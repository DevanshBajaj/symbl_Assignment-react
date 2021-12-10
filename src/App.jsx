import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data)
  }
  console.log(users)


  return (
    <div className="App">
      <div className='container'>
        {users.map((user) => {
          return (
            <div className='card' key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Phone: {user.phone}</p>
              <p>E-mail: {user.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
