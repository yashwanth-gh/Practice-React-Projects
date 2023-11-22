import React from 'react'
import Form from './Form'

function Home() {
  return (
    <>
      <section className='box-border'>
        <div className='flex justify-around items-center gap-6 w-full h-screen px-5 pt-20'>
          <div className='max-w-full max-h-full'>
            <img src="https://freesvg.org/img/location-path.png" alt="illustration-on-routing" />
          </div>
          <div className='font-main text-center flex-col justify-center items-center flex-wrap'>
            <h1 className='font-bold text-blue-600 text-5xl'>
              Hi! This is a practice project to try Routing and Context API in React
            </h1>
            <p className='font-light text-blue-500 text-2xl'>
              Scroll down to get more info on what this project is for..
            </p>
            <span className="material-symbols-outlined text-5xl text-red-500">
              keyboard_double_arrow_down
            </span>
          </div>
        </div>

        <div className='flex justify-around items-center gap-6 w-full h-full px-5 pt-20'>

          <div className='font-main text-center flex-col justify-center items-center flex-wrap'>
            <h1 className='font-bold text-blue-600 text-5xl'>
             Please enter the below fields
            </h1>
            <Form/>
            <p className='font-light text-blue-500 text-2xl'>
              Now SUBMIT and check your Github profile info in Profile page through navigation bar
            </p>
            {/* <span className="material-symbols-outlined text-5xl text-red-500">
              keyboard_double_arrow_down
            </span> */}
          </div>

        </div>
      </section>
    </>
  )
}

export default Home