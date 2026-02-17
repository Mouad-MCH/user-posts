

const Users = (props) => {
  return (
    <div onClick={props.onClick}  className="user">
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  )
}

export default Users