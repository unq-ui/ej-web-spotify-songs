import { useEffect, useState } from "react";

const Form = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value)
  const onPasswordChange = (e) => setPassword(e.target.value)

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input value={email} onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="button" onClick={onLogin} className="btn btn-primary">Login</button>
    </form>
  )
}

export default Form;