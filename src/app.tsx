import React from 'react';
import DynamicTabNavigator from '@/navigation/DynamicTabNavigator';
import { StoreProvider } from '@/stores/useStore';

const App = () => {
  return (
    <StoreProvider>
      <DynamicTabNavigator />
    </StoreProvider>
  );
};

export default App;
