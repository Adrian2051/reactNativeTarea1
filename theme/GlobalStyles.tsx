import { StyleSheet } from "react-native"
import { Colors } from "../theme/Colors"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 30,
        textAlign: 'center',
    },

    boton: {
        borderRadius: 8,
        backgroundColor: Colors.black,
        textAlign: 'center',
        padding:10,
    },
    botonAzul: {
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: Colors.lightblue,
        textAlign: 'center',
    },
    botonRosa: {
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: Colors.pink,
        textAlign: 'center',
    },
    inp: {
        marginTop: 10,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.grey,
        textAlign: 'center',
        width: 250,
    }
})