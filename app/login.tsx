import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import Boton from '@/components/Boton'

const Login = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
        <TextInput placeholder='Usuario'></TextInput>
        <TextInput placeholder='Contrasenia'></TextInput>
        <Boton label='Acceder' backgroundColor='pink' width= {250} link='./tabs'></Boton>
      <Text style= {GlobalStyles.titulo}>Login</Text>
    </View>
  )
}

export default Login