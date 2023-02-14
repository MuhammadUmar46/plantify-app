import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SplashScreen from './src/screens/Splash';
import ProductPage from './src/screens/ProductPage';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';  
import MenuScreen from './src/screens/Menu';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen  name='Splash' component={SplashScreen} />
        <Stack.Screen  name='Signup' component={SignupScreen} />
        <Stack.Screen  name='Login' component={LoginScreen} />
        <Stack.Screen  name='Home' component={HomeScreen} />
        <Stack.Screen name='Product' component={ProductPage} />
        <Stack.Screen name='Checkout'  component={CheckoutScreen} />
        <Stack.Screen name='Order' component={OrderScreen} />
        <Stack.Screen name='Menu' component={MenuScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
