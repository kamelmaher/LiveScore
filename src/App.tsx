import { useState } from 'react'
import './App.css'
import Football from './Football'
function App() {
  const [active, setActive] = useState(0)
  return (
    <>
      <div>
        <div className='container '>
          <nav className='nav-bar p-4 pb-1' style={{ background: "#3F1052"}}>
            <ul className='d-flex justify-content-center list-unstyled text-white m-auto tabs'>
              {["BundesLiga" ,"Premier League","Laliga","Serie A","League 1"].map((e,index)=> {
                return <li className={`nav-item ${active == index && "active"}`} key={index} onClick={()=> {
                  setActive(index)
                }}>{e}</li>
              })}
            </ul>
          </nav>
          <Football active={active}/>
        </div>
      </div>
    </>
  )
}

export default App
