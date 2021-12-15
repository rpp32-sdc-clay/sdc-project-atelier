import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
import RR from './Components/RatingsAndReviews/RatingsAndReviews.jsx';
import token from '../../config.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'
  }
  render() {
    return (
      <div>
        <Overview apiUrl={this.apiUrl} token={token}/>
        <RR apiUrl={this.apiUrl} token={token} />
        {/*Related
        Q&A*/}
      </div>
    )
  }
}

export default App;