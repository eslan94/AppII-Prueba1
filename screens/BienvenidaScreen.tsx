import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Navigator from '../navigator/Navigator';

export default function BienvenidaScreen({navigation}:any) {
  return (
    <ImageBackground source={{uri: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/05/aplicaciones_mascotas.jpg?fit=1000%2C830&quality=50&strip=all&ssl=1'}} style={styles.container}>
        <View>
            <Text>Esteban Calvopiña</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('BottomTab')}>
                <Text style={styles.textbutton}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        resizeMode: 'cover',
        alignItems: 'center'
    },
    btn: {
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: 'green'
      },
      textbutton: {
        fontSize: 15,
        color: 'rgb(0,255,30)',
        fontWeight: 'bold',
      },
})