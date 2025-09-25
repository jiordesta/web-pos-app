import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { login } from "../redux/reducers/authentication.slice"
import { error } from "../redux/reducers/notification.slice"

export default function Login() {
  const [credential, setCredential] = useState({
    username:"",
    password:""
  })
  const dispatch = useDispatch<AppDispatch>()
  const {isLoggingIn} = useSelector((state: RootState) => state.authentication)
  const handleInput = (value: string, key: string) => {
    setCredential({...credential, ...{[key]:value}})
  }

  const handleLogin = () => {
    dispatch(login(credential)).then((res:any) => {
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
          onClick={handleLogin}
        >{isLoggingIn ? 'Loading...' : 'Login'}</button>
        <a href="/authentication/register" className="underline text-center text-sm">i don't have an account</a>
      </div>
    </div>
  )
}
