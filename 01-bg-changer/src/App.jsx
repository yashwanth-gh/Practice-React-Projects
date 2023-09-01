import { useState } from 'react'
import './App.css'

function App() {
  const [liveColor, setColor] = useState("beige")
  return (
   <>
   <div className='min-w-full min-h-screen relative' style={{backgroundColor: liveColor}}>
    <div className="bg-green-200 px-4 py-2 w-fit h-fit rounded-full fixed left-40 bottom-10 border-2 border-black">
      <button onClick={()=>setColor("Violet")} className='px-3 mx-2 border border-black rounded-full'>
        Violet 
        </button>
      <button onClick={()=>setColor("Indigo")} className='px-3 mx-2 border border-black rounded-full'>
        Indigo 
        </button>
      <button onClick={()=>setColor("Blue")} className='px-3 mx-2 border border-black rounded-full'>
        Blue
        </button>
      <button onClick={()=>setColor("Green")} className='px-3 mx-2 border border-black rounded-full'>
        Green
        </button>
      <button onClick={()=>setColor("Yellow")} className='px-3 mx-2 border border-black rounded-full'>
        Yellow 
        </button>
      <button onClick={()=>setColor("Orange")} className='px-3 mx-2 border border-black rounded-full'>
        Orange 
        </button>
      <button onClick={()=>setColor("Red")} className='px-3 mx-2 border border-black rounded-full'>
        Red
        </button>
      <button onClick={()=>setColor("White")} className='px-3 mx-2 border border-black rounded-full'>
        White
        </button>
      <button onClick={()=>setColor("Black")} className='px-3 mx-2 border border-black rounded-full'>
        Black
        </button>
    </div>
   </div>
   </>
  )
}

export default App
