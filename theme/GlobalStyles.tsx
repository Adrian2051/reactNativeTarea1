import { StyleSheet } from "react-native"
import { Colors } from "../theme/Colors"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 22
    },

    boton: {
        borderRadius: 8,
        backgroundColor: Colors.black,
    },

    botonAzul: {
        borderRadius: 8,
        backgroundColor: Colors.lightblue,
    },
    botonRosa: {
        borderRadius: 8,
        backgroundColor: Colors.pink,
    }
})