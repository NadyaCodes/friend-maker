import { useState } from "react"
import Friend from "./Friend"

export default function FriendButton() {
  const [friend, setFriend] = useState({})

  const fetchPerson = () => {
    fetch('https://randomuser.me/api/').then(response => response.json()).then(json => {
      setFriend(json.results[0])
    })
  }

  return (
    <div>
      {friend.name !== undefined ? <Friend friend={friend} /> : <button onClick={() => fetchPerson()}>Make Friend</button>}
      <button onClick={() => window.location.reload(false)}>Reset</button>
    </div>
  )
}