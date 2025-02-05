import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import Boton from '@/components/Boton'

const ScreenDesconexion = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Desconectarse</Text>
      <Boton label='Sign OUT' backgroundColor='pink' width= {250} link='./tabs'></Boton>
    </View>
  )
}

export default ScreenDesconexion