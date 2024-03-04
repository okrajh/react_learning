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
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  childern: 'Click to visit',
};

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  // Name()
  anotherElement
  // </React.StrictMode>,
)
