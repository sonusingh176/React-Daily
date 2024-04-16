

import './App.css'
import Feed from './components/Feed'
import Modal from './components/Modal'


function App() {
 
  const tweets =[
    {
      name:'sonu singh',
      content:'This is  great'
    },
    {
      name:'gauav singh',
      content:'This is my first tweet'
    }
  ]

  return (
  <>
 

    {/* Here Feed is children and we are Passing props to its parent */}
  <Feed name={tweets[0].name} content={tweets[0].content}/> 

  <Feed>
    <div>
      {tweets[1].name}
      <p>{tweets[1].content}</p>
    </div>
  </Feed>

  <Modal>
    <p>Do you want to save the changes?</p>
    <button className='btn btn-success'>Yes</button>
    <button className='btn btn-danger'>No</button>
  </Modal>
  
  <Modal>
    <p>Your changes have been saved!</p>
    <button className='btn btn-success'>Yes</button>
  
  </Modal>
  </>
  )
}

export default App
