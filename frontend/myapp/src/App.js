import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import Form from './components/FormComponent';
import Card from './components/CardComponent';
import React, { Component } from 'react';
import axios from 'axios'



class App extends Component {
  state = { 
    "post":[]
  } 
  
  componentDidMount(){
    this.getPost()
    
  }
 

  getPost = () =>{
    // const apiRes = await fetch ('http://127.0.0.1:8000/')
    // const data = await apiRes.json();
    // console.log('ss', data)
    // this.setState({
    //   "post": data
    // })
    axios
     .get("http://127.0.0.1:8000/")
     .then((res) => 
      {
        this.setState({
            "post": res.data
          })
          console.log('dd', res.data)
      }  
      )
     .catch((err) => console.log(err));
  }

  
  
  render(){
    const post = this.state.post
    
    return (
      <>
      
        <div className='container'>
        <h1>Simmi Foundation Organization Tasks</h1>
        {post.length !== 0  ? 
        <>
        <h2 className='text-center'>Task 1</h2>
        <Form refresh={this.getPost} />
  
        <h2 className='mt-5 text-center'>Task 2</h2>
        {post.success ? 
  
          <Card data={post} />
          :
          <div>
            <h2>ERROR SOMETHING WENT WRONG</h2>
          </div>
          } </>
          :<>Loading backend(please ensure backend server is running) ....</>} 

        </div>
        

  
      </>
        
    );
  }
  
}

export default App;
