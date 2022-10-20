import Chat from "./Chat"

export default function Friend(props) {
  const {friend} = props

  let nickname = friend.login.username.slice(0, (friend.login.username.length - 3))

  return(
    <div className='friend-container'>
      <h2>Here's your new friend:</h2>
      <div>{friend.name.first}</div>
      <div>(aka {nickname})</div>
      <img src={friend.picture.large} alt='new friend profile picture'></img>
      <Chat name={friend.name.first} image={friend.picture.large}/>
    </div>
  )
}