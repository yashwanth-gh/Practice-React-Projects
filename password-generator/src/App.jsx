import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&*!()?"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numbersAllowed, charAllowed, setPassword])
 const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)
    
  window.navigator.clipboard.writeText(password)
 },[password])
  useEffect(()=>{
    passwordGenerator();
  },[length,numbersAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 my-8 text-green-400 bg-gray-500">
        <h1 className='text-white text-center m-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            ref={passwordRef}
            readOnly
          />
          <button 
          className='px-4 py-2 bg-blue-500 active:bg-blue-300 transition-all '
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>
              Length: ({length})
            </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id='numberInput'
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label for="numberInput">
              Numbers
            </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label for="charInput">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
