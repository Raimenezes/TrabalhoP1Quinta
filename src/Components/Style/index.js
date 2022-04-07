import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 200
    },
    form:{
        padding: 90,
        borderRadius: 10,
        backgroundColor:"#C71585",
        marginRight: "10%",
        marginTop: 150,
        width: "100%" 

    },
    titulo: {
       marginTop: 100,
       fontSize: 30,
       textAlign: "center",
       color: "#1C1C1C"
        //fontFamily: "Montserrat"
    },
    input:{
        backgroundColor: "#9C9C9C",
        borderRadius: 10,
        height: 38
    },
    label:{
        fontSize: 20,
        lineHeight: 42,
    },
    botao:{
        marginTop: 15,
        backgroundColor: "#838B8B",
        borderRadius: 10,
        height: 42
    },
    botaoTexto:{
      marginTop:6,
      marginLeft:"42%",
      fontSize: 23

    },
    result:{
        alignItems: "center"
    }

 
})