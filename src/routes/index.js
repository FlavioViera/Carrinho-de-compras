import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: '            Meu Carrinho',
          headerStyle: {
            backgroundColor: '#b0efef',
          },
          headerTintColor: '#000',
        }}
      />
    </Stack.Navigator>
  )
}