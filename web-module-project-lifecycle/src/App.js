import './App.css';
import React from 'react';
import axios from 'axios';

// https://api.github.com/users/

class App extends React.Component {
  state = {
    userInfo: [],
    userSearch: ''
  };

  componentDidMount(){
    axios
      .get("https://api.github.com/users/mojombo")
      .then(res => {
        console.log(res)
        this.setState({
          userInfo: res.data
        })
      })
      .catch(err => console.log(err))
  };

  componentDidUpdate(){
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
      .then(r => console.log(r))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      userSearch: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
      .then(r => {
        this.setState({
          ...this.state,
          userInfo: r.data
        });
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.userSearch} onChange={this.handleChange} />
          <button>Search a user</button>
        </form>
        <div className="userData">
          <img src={this.state.userInfo.avatar_url} alt="profile_img" className="user_avatar" />
          <h2>{this.state.userInfo.name}</h2>
          <div className="userInfo">
            <h3>Github: {this.state.userInfo.login}</h3>
            <h3>{this.state.userInfo.email}</h3>
          </div>
          <div className="twitter">
              <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="user"/>
              <h3>{this.state.userInfo.twitter_username}</h3>
          </div>
          <div className="followers">
            {/* THIS IS WHERE I WOULD DO THE FOLLOWER MVP, IF I HAD ANY (API CALLS LEFT) */}
            {/* THIS IS WHERE I WOULD DO THE FOLLOWER MVP, IF I HAD ANY (API CALLS LEFT) */}
            {/* THIS IS WHERE I WOULD DO THE FOLLOWER MVP, IF I HAD ANY (API CALLS LEFT) */}
            {/* THIS IS WHERE I WOULD DO THE FOLLOWER MVP, IF I HAD ANY (API CALLS LEFT) */}
            <p></p>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
