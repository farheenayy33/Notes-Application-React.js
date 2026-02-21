import React, { useState } from 'react'
import Notes from './assets/Notes.png'
import { RxCrossCircled } from "react-icons/rx";
const App = () => {
  const [Title, setTitle] = useState('')
  const [FeedBack, setFeedBack] = useState('')
  const [Task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    if (!Title || !FeedBack) return
    setTask([...Task, { Title, FeedBack }])
    setTitle('')
    setFeedBack('')
  }
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col lg:flex-row gap-8 p-6 rounded-md'>
        <form className='lg:w-3/7' onSubmit={submitHandler}>
          <div className='flex flex-col gap-4 w-full mx-auto mt-4'>
            <h1 className='font-bold flex flex-col text-4xl text-center'>Notes Application</h1>
            <input
              type="text"
              placeholder='Enter Notes Heading'
              value={Title}
              className='border border-black rounded-md p-2 text-xl'
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder='Enter Notes Description'
              value={FeedBack}
              className='border border-black rounded-md p-2 text-sm'
              onChange={(e) => setFeedBack(e.target.value)}
            />
            <input
              type="submit"
              className='bg-blue-500 text-white p-2 rounded-md text-xl active:scale-95 hover:bg-blue-700'
              value='Add Note' 
            />
          </div>
        </form>
        <div className='bg-gray-200 min-h-screen flex flex-col gap-7 p-3 items-start lg:w-full pl-9'>
          <h1 className='text-3xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap gap-5 justify-start'>
            {Task.map((task, idx) => (
              <div
                key={idx}
                className="relative w-60 h-60 rounded-2xl px-7 py-10 bg-center text-black"
                style={{ backgroundImage: `url(${Notes})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              >
                <button
                  onClick={() => setTask(Task.filter((_, i) => i !== idx))}
                  className="absolute top-10 right-9 text-red-600 text-xl hover:text-red-700 font-extrabold active:scale-105"
                >
                  <RxCrossCircled />
                </button>
                <h2 className="font-bold text-lg line-clamp-1">
                  {task.Title}
                </h2>
                <p className="text-sm line-clamp-3">
                  {task.FeedBack}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App









