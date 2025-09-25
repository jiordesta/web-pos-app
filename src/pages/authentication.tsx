import { useParams } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Authentication() {
  const { action } = useParams();

  const ACTION = {
    login : 'login',
    register : 'register'
  } as const

  return (
    <div>{action === ACTION.login ? <Login/> : <Register/>}</div>
  )
}
