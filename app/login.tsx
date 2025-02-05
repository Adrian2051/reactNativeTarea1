import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import Boton from '@/components/Boton'

const Login = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
        <Text style= {GlobalStyles.titulo}>Login</Text>
        <TextInput placeholder='Usuario' style={GlobalStyles.inp}></TextInput>
        <TextInput placeholder='Contrasenia' style={GlobalStyles.inp} secureTextEntry={true}></TextInput>
        <Boton label='Acceder' backgroundColor='pink' width= {250} link='./tabs'></Boton>
        <Boton label='Registrarse' backgroundColor='lightblue' width= {250} link='./tabs'></Boton>
    </View>
  )
}

export default Login