import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom'
import Main from './containers/Main';
// import SingleView from './components/SingleView/SingleView';
class App extends Component {
  render() {


    return (
      <div>
        {/* <Main />
        <Header />
        <FullGrid /> */}

        <Route path="/" component={Main} />;

        {/* <Route path = '/view/:id' component = {SingleView}/>; */}

      </div>
    );
  }
}

export default App;
