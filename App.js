import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from "@react-native-material/core";

const App = () => {
  return <Provider>
    <AppNavigator />
  </Provider>;
};

export default App;