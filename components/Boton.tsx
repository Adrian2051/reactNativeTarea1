import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, RelativePathString } from "expo-router";
import { Pressable } from "react-native";

interface Props {
    label: string,
    backgroundColor?: 'lightblue' | 'pink',
    width?: number,
    onPress?: () => void,
    link: RelativePathString
}

export const Boton = ({label, backgroundColor, width, onPress, link}:Props) => {
    const accion =(() => {
        if(onPress) onPress();
    });

    <Pressable>
            <Link
                style={[GlobalStyles.boton,
                backgroundColor === 'lightblue' ? GlobalStyles.botonAzul : null, backgroundColor === 'pink'
                    ? GlobalStyles.botonRosa : null,
                { width },
                ]}
                onPress={accion}
                href={link}>{label}
            </Link>
    </Pressable>
};
export default Boton;