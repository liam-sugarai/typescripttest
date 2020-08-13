import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Routes from './routes';
import { store } from './store/index';

const App: React.FunctionComponent = () => (
  <div className="App" id="main-body">
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;