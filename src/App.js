import React from 'react';
import './App.css';
import Axios from 'axios';
import Chatlist from './ChatList';
import ChatForm from './ChatForm'
import qs from 'qs';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: ''
    };
  }
  componentDidMount() {

    setInterval(async() => {

      const {data} = await Axios.get('/api');
      // console.log(data);
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
        <ChatForm 
          text={this.state.text}
          handleChange={this._setText}
          handleSend={this._handleMessage}
        />
      </div>
    );
  } 
  _setText = (text) => {
    console.log('app _setText');
    this.setState({
      text
    });
  }
  _sendMessage = async () => {
    console.log('app _sendMessage');
    await Axios({
      method: 'post',
      url: '/api',
      data: qs.stringify ({
        message: this.state.text
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    this.setState({
      text: ''
    });
  }
}

export default App;

