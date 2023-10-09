import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetHeader from './components/ui/Navbar/navbar'
import GetHero from './components/ui/Hero/hero'

function App() {
    return (
    <div className="App">
      <GetHeader/>
      <GetHero/>
     </div>
  )
}

export default App
