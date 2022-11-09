import Button from "../../components/Button"
import TextInput from "../../components/TextInput"
import './styles.css'

const Login = () => {

  return (
    <div className="container">
      <h1>Bankan</h1>
      <div className="login-container">
        <h4>Login to your account.</h4>
        <form className="form-container">
          <TextInput type="text" placeholder="Username" />
          <TextInput type="password" placeholder="Password" />
          <Button type="primary">
            Login
          </Button>
          <span>Create an account | Forgot Password</span>
        </form>
      </div>
    </div>
  )
}

export default Login