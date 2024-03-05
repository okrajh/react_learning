import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const user = {
  name: 'Himanshu Raj',
  email: 'himanshu@gmail.com'
}
function Name() {
  return (
    <div>
      <h1>Himanshu Raj</h1>
    </div>
  )
}

function User() {
  return (
    <div>
      <tr>
        <th>Name : </th>
        <td>{user.name}</td>
      </tr>
      <tr>
        <th>Email : </th>
        <td>{user.email}</td>
      </tr>
    </div>
  )
}
const reactElement2 = {
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

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to go google.com',
  '\n   hello world',

  // 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  // Name()
  // anotherElement
  reactElement
  // </React.StrictMode>,
  // < User />
)
