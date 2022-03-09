import { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./styles.module.css"

function Main() {
  
  useEffect( () => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data) )
  }, [] )
  
  const [users, setUsers] = useState([])
  
  return (
    <div className={styles.main}> 
    Main
    {users.map( (user) => (
      <div key={user.id}>{user.name}</div>
    ) )}
    </div>
  )
}

export default Main