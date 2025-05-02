import './App.css'
import { useState } from 'react'
import UserCard from './UserCard'

function App() {
  const [users, setUsers] = useState(initialData)
  const [search, setSearch] = useState('')
  const [filterKey, setFilterKey] = useState('')

  const handleClick = () => {
    const foundUser = users.filter(user =>  user[filterKey] == search)
    setUsers(foundUser)
  }
  const handleYoungest = () => {
      const sortedUsers = users.sort((a,b) => {
        return a.age - b.age
      })
      setUsers(sortedUsers)
    
  }
  const handleOldest = () => {
    const sortedUsers = users.sort((a,b) => {
      return b.age - a.age
    })
    setUsers(sortedUsers)
  }

  const userKeys = Object.keys(initialData[0])
  console.log(users, 'users  ')
  return (
    <>
    <select value = {filterKey} onChange={(e) => setFilterKey(e.target.value)}> 
      <option key={1} value ={''}>Select</option>
     {userKeys.map(key => (
      <option key={key} value={key}>{key}</option>
     ))}
    </select>
    <input type= "text" value = {search} onChange={(e) => setSearch(e.target.value)}></input>
    <button onClick = {handleClick}>Search</button>
    <button onClick = {() => setUsers(initialData)}>Clear</button>
    <button onClick = {handleYoungest}>Youngest</button>
    <button onClick = {handleOldest}>Oldest</button>
    <div style={{display: "flex", flexWrap: 'wrap'}}>
      {
        users.map(user => <UserCard key={user.id} user={user} />)
      }
    </div>
    </>
  );
}
const initialData = [
  {
    id: 1, name: "Alice Smith", email: "alice.smith@example.com", username: "aliceS", age: 30, gender: "female",
    isActive: true, role: "admin", address: { street: "10 Elm St", city: "Austin", state: "TX", zip: "73301", country: "USA" },
    phone: "+1-555-1001", registeredAt: "2022-01-15T08:30:00Z", lastLogin: "2025-04-28T09:00:00Z",
    preferences: { theme: "light", language: "en-US", notifications: true }
  },
  {
    id: 2, name: "Bob Johnson", email: "bob.j@example.com", username: "bobbyJ", age: 35, gender: "male",
    isActive: false, role: "user", address: { street: "45 Pine St", city: "Denver", state: "CO", zip: "80201", country: "USA" },
    phone: "+1-555-1002", registeredAt: "2021-10-12T12:00:00Z", lastLogin: "2025-03-12T14:10:00Z",
    preferences: { theme: "dark", language: "en-US", notifications: false }
  },
  {
    id: 3, name: "Charlie Kim", email: "charlie.k@example.com", username: "charK", age: 29, gender: "non-binary",
    isActive: true, role: "moderator", address: { street: "89 Lake Dr", city: "Seattle", state: "WA", zip: "98101", country: "USA" },
    phone: "+1-555-1003", registeredAt: "2020-08-23T15:20:00Z", lastLogin: "2025-04-25T18:15:00Z",
    preferences: { theme: "dark", language: "ko-KR", notifications: true }
  },
  {
    id: 4, name: "Diana Brooks", email: "diana.b@example.com", username: "dianaB", age: 26, gender: "female",
    isActive: true, role: "editor", address: { street: "23 Maple Ave", city: "San Diego", state: "CA", zip: "92101", country: "USA" },
    phone: "+1-555-1004", registeredAt: "2022-04-10T09:45:00Z", lastLogin: "2025-04-28T10:30:00Z",
    preferences: { theme: "light", language: "en-US", notifications: true }
  },
  {
    id: 5, name: "Ethan Lee", email: "ethan.lee@example.com", username: "ethanL", age: 31, gender: "male",
    isActive: false, role: "user", address: { street: "77 Oak Blvd", city: "Chicago", state: "IL", zip: "60601", country: "USA" },
    phone: "+1-555-1005", registeredAt: "2021-07-03T11:00:00Z", lastLogin: "2025-02-14T08:30:00Z",
    preferences: { theme: "dark", language: "zh-CN", notifications: false }
  },
  {
    id: 6, name: "Fatima Khan", email: "fatima.k@example.com", username: "fkhan", age: 24, gender: "female",
    isActive: true, role: "editor", address: { street: "9 Garden Ln", city: "Miami", state: "FL", zip: "33101", country: "USA" },
    phone: "+1-555-1006", registeredAt: "2023-01-11T13:40:00Z", lastLogin: "2025-04-29T16:50:00Z",
    preferences: { theme: "light", language: "es-ES", notifications: true }
  },
  {
    id: 7, name: "George Patel", email: "george.p@example.com", username: "georgeP", age: 38, gender: "male",
    isActive: true, role: "admin", address: { street: "12 Ocean Rd", city: "Boston", state: "MA", zip: "02101", country: "USA" },
    phone: "+1-555-1007", registeredAt: "2020-11-09T10:15:00Z", lastLogin: "2025-04-29T09:25:00Z",
    preferences: { theme: "dark", language: "en-US", notifications: true }
  },
  {
    id: 8, name: "Hana Suzuki", email: "hana.s@example.com", username: "hsuzuki", age: 27, gender: "female",
    isActive: true, role: "user", address: { street: "33 Sakura St", city: "San Francisco", state: "CA", zip: "94101", country: "USA" },
    phone: "+1-555-1008", registeredAt: "2023-09-14T16:10:00Z", lastLogin: "2025-04-27T13:00:00Z",
    preferences: { theme: "light", language: "ja-JP", notifications: true }
  },
  {
    id: 9, name: "Ivan Petrov", email: "ivan.p@example.com", username: "ivanP", age: 40, gender: "male",
    isActive: false, role: "moderator", address: { street: "101 Birch Ct", city: "Phoenix", state: "AZ", zip: "85001", country: "USA" },
    phone: "+1-555-1009", registeredAt: "2019-06-20T14:25:00Z", lastLogin: "2025-03-20T11:00:00Z",
    preferences: { theme: "dark", language: "ru-RU", notifications: false }
  },
  {
    id: 10, name: "Julia Nguyen", email: "julia.n@example.com", username: "jnguyen", age: 32, gender: "female",
    isActive: true, role: "editor", address: { street: "17 Lotus Way", city: "Houston", state: "TX", zip: "77001", country: "USA" },
    phone: "+1-555-1010", registeredAt: "2022-02-28T09:00:00Z", lastLogin: "2025-04-26T17:00:00Z",
    preferences: { theme: "light", language: "vi-VN", notifications: true }
  },
  // Add users 11 to 20 similarly...
];


export default App