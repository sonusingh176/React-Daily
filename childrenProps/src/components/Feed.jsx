

const Feed = (props) => {
  return (
    <>
        <h1>{props.name}</h1>
        <div>{props.content}</div>
        <hr />
        <div>
            <h1>{props.children}</h1>
        </div>
        <hr />
    </>
   
  )
}

export default Feed