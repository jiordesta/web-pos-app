import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { register } from "../redux/reducers/authentication.slice"
import { error } from "../redux/reducers/notification.slice"

export default function Register() {
  const [userDetails, setUserDetails] = useState({
    username:"",
    password:"",
    email:"",
    fname:"",
    lname:""
  })
  const dispatch = useDispatch<AppDispatch>()

  const {isRegistering} = useSelector((state: RootState) => state.authentication)

  const handleInput = (value: string, key: string) => {
    setUserDetails({...userDetails, ...{[key]:value}})
  }

  const handleRegister = () => {
    dispatch(register(userDetails)).then((res:any) => {
        if (res.error) {
          dispatch(error(res.payload.message));
        }
      });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black/25 p-2 rounded-lg flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4 m-4">
        <input 
          type="text" 
          className="w-full border-none outline-none focus:ring-0 bg-white/25 p-2 rounded-md" 
          placeholder="first name"
          onChange={(e) => handleInput(e.target.value, 'fname')}
        />
        <input 
          type="password" 
          className="w-full border-none outline-none focus:ring-0 bg-white/25 p-2 rounded-md" 
          placeholder="last name"
          onChange={(e) => handleInput(e.target.value, 'lname')}
        />
        <input 
          type="email" 
          className="w-full border-none outline-none focus:ring-0 bg-white/25 p-2 rounded-md" 
          placeholder="last name"
          onChange={(e) => handleInput(e.target.value, 'email')}
        />
        <input 
          type="text" 
          className="w-full border-none outline-none focus:ring-0 bg-white/25 p-2 rounded-md" 
          placeholder="username"
          onChange={(e) => handleInput(e.target.value, 'username')}
        />
        <input 
          type="password" 
          className="w-full border-none outline-none focus:ring-0 bg-white/25 p-2 rounded-md" 
          placeholder="password"
          onChange={(e) => handleInput(e.target.value, 'password')}
        />
        <button 
          className="bg-black text-white rounded-lg"
          onClick={handleRegister}
        >{isRegistering ? 'Loading...' : 'Register'}</button>
        <a href="/authentication/login" className="underline text-center text-sm">i have an account</a>
      </div>
    </div>
  )
}
