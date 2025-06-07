import { useState } from 'react'

import './App.css'
import Car from './pages/usestate/Car'
import Timer from './pages/useeffect/Timer'
import Users from './pages/useeffect/User'
import TitleUpdater from './pages/useeffect/TitleUpdater'
import BadExample from './pages/useeffect/BadExample'
import GoodExample from './pages/useeffect/GoodExample'
import InputFocus from './pages/useRef_/InputFocus'

function App() {


  return (
    <>
     {/* useState component*/}
      {/* <Car/> */}

      {/* useEffect component*/}
      {/* <Timer/> */}
      {/* <Users/> */}
      {/* <TitleUpdater/> */}
      {/* <BadExample/> */}
      {/* <GoodExample/> */}

      {/* useRef component */}
      <InputFocus/>
     
    </>
  )
}

export default App
