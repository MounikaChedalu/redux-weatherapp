import React from 'react';
 import store from './redux/store';
 import { Provider } from 'react-redux';
 import WeatherApp from './Components/WeatherApp';

function App() {
  return (
  <React.Fragment>
    <Provider store = {store}>
          <WeatherApp />
   </Provider>
   </React.Fragment> 
  
  );
}

export default App;
