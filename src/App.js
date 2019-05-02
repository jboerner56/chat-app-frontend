import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Chatlist from './Chatlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentDidMount() {

    setInterval(async() => {

      const {data} = await Axios.get('/api');
      console.log(data);
      this.setState({
        messages: data
        });
      }, 2000);
    }

  render() {

    return(
      <div className="App">
        <h1>Chatapp</h1>
        <Chatlist messages={this.state.messages}/>
      </div>
    );
  } 
}

export default App;
