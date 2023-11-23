import { useState } from 'react'
import { Modal } from './components/Modal'
import './App.css'

function App() {
  const [operModal, setOperModal] = useState(false)

  return (
    <div>
      <button onClick={() => setOperModal(true)}>Modal</button>
          <Modal open={operModal} onClose={() => setOperModal(false)} />
    </div>
  )
}

export default App
