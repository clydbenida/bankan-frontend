import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../api/user"
import Button from "../../components/Button"
import TextInput from "../../components/TextInput"
import './styles.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = async (e:any) => {
    e.preventDefault()
    console.log(username, password)
    await loginUser(username, password)
  }

  return (
    <div className="container">
      <h1>Bankan</h1>
      <div className="login-container">
        <h4>Login to your account.</h4>
        <form className="form-container">
          <TextInput type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
          <TextInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
          <span>Create an account | Forgot Password</span>
        </form>
      </div>
    </div>
  )
}

export default Login