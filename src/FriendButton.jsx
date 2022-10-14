import { useState } from "react"
import Friend from "./Friend"

export default function FriendButton() {
  const [friend, setFriend] = useState({})

  const fetchPerson = () => {
    console.log("make friend")
    fetch('https://randomuser.me/api/').then(response => response.json()).then(json => {
      console.log(json.results[0])
      setFriend(json.results[0])
    })
  }

  return (
    <div>
      <button onClick={() => fetchPerson()}>Make Friend</button>
      {friend !== undefined && <Friend friend={friend} />}
    </div>
  )
}