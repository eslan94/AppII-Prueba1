import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BienvenidaScreen from '../screens/BienvenidaScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RegistroMascotaScreen from '../screens/RegistroMascotaScreen'
import PerfilScreen from '../screens/PerfilScreen'
import EditarScreen from '../screens/EditarScreen'
import ListaScreen from '../screens/ListaScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Tab.Screen name='Bienvenida' component={BienvenidaScreen}/>
            
            <Stack.Screen name='BottomTab' component={MyTabs}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={RegistroMascotaScreen}/>
            <Tab.Screen name="Perfil" component={PerfilScreen}/>
            <Tab.Screen name="Editar" component={EditarScreen}/>
            <Tab.Screen name="Lista" component={ListaScreen}/>
        </Tab.Navigator>
    )
}

export default function Navigator() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  )
}
