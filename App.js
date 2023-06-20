import React from 'react';
import FoodDeliveryApp from './src/App';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';


export default function App() {
  return (

    <Provider store={store}>
      <FoodDeliveryApp />
    </Provider>
  )
  }