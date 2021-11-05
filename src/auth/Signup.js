import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  let handleSubmit = (event) => { 
    event.preventDefault();
    console.log(username, password);

    fetch("http://localhost:4000/user/register", {
    method: 'POST', 
    body: JSON.stringify({user:{email: username, password: password}}),     // email & password var are from your database columns thus user models
    headers: new Headers({
        'Content-Type': 'application/json'
    })
  }).then(
     (response) => response.json() 
  ).then((data) => {
    console.log(data)
     props.updateToken(data.sessionToken) 
  })
}

  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
        </FormGroup>
        <br/>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
        </FormGroup>
        <br/>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
   )
}

export default Signup;