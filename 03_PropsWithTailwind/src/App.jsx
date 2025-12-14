import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  // const [count, setCount] = useState(0)

  // const myArr = [12, 23, 34];
  // const myObj = {
  //   Name: "Sourav",
  //   Age: 19,
  //   Hobby: "Development and Singing"
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card userName="Sourav Kumar" src="https://avatars.githubusercontent.com/u/196986396?s=400&u=44a1840e6a58208f35917c1cc222c0bf00b3be69&v=4" designation="Software Developer" location="(Hazaribagh, India)"/>
      <Card userName="Hitesh Choudhary" src="https://avatars.githubusercontent.com/u/11613311?v=4" designation="Software Engineer" location=" (Bangalore, India)"/>
    </>
  )
}

export default App
