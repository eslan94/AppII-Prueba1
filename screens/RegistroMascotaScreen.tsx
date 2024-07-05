import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { db } from '../config/Config'
import { ref, set } from "firebase/database";

export default function RegistroMascotaScreen() {

    const [codigo, setcodigo] = useState("")
    const [nombre, setnombre] = useState("")
    const [raza, setraza] = useState("")
    const [edad, setedad] = useState("")

    ///Guardar datos///
    function guardarMascota(codigo: string, nombre: string, raza: string, edad: string) {
        
        set(ref(db, 'mascotas/' + codigo), {
          name: nombre,
          raza: raza,
          age : edad
        });
        Alert.alert('Mensaje', 'Mascota agregada')

        setcodigo("")
        setnombre("")
        setraza("")
        setedad("")
      }

  return (
    <View style={styles.container}>
      <Text>Nueva Mascota</Text>
      <TextInput
        placeholder='Ingresar ID'
        keyboardType='numeric'
        onChangeText={(texto)=> setcodigo(texto)}
        value={codigo}
      />
      <TextInput
        placeholder='Ingresar Nombre'
        onChangeText={(texto)=> setnombre(texto)}
        value={nombre}
      />
      <TextInput 
      placeholder='Raza'
      onChangeText={(texto)=> setraza(texto)}
      value={raza}
      />
      <TextInput
      placeholder='Edad'
      keyboardType='numeric'
      onChangeText={(texto)=> setedad(texto)}
      value={edad}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>guardarMascota(codigo, nombre, raza, edad)}>
                <Text style={styles.textbutton}>Guardar</Text>
      </TouchableOpacity>
    </View>
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