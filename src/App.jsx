import { useState } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullName, setFulName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFulName(firstName+' '+ lastName)
    setFirstName("")
    setLastName("")
  }
  return (
    <div>
      <div>
        <h1 className='text-center font-bold text-5xl'>Full Name Display</h1>
        <form onSubmit={handleSubmit} className='flex gap-10 mt-10'>
          <h1 className='ml-48'>First Name :  <input
            type="text"
            value={firstName}
            className='border'
            onChange={(e) => { setFirstName(e.target.value) }}
            required
          /> </h1>
          <h1> Last Name : <input
            type="text"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value) }}
            className='border'
            required /></h1>
          <button
           type='submit'
           className='border bg-gray-300'> Submit</button>
        </form>
        {
          fullName &&
          <h1 className='ml-10'> Full Name - {fullName}</h1>
        }
      </div>
    </div>
  )
}

export default App
