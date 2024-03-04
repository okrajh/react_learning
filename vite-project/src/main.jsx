import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Name() {
  return (
    <div>
      <h1>Himanshu Raj</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  Name()
  // </React.StrictMode>,
)
