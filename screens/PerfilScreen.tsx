import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../config/Config'
import { ref, set, onValue } from "firebase/database";
import { FlatList, TextInput } from 'react-native-gesture-handler';



export default function PerfilScreen() {

    const [codigo, setcodigo] = useState("")
    const [nombre, setnombre] = useState("")
    const [raza, setraza] = useState("")
    const [edad, setedad] = useState("")

    const [lista, setlista] = useState([])

    function leer(){
        const starCountRef = ref(db, 'mascotas/' + codigo);
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        const listTemp : any= Object.keys(data).map((key)=>({
            key, ...data[key]
        }))

        setlista(listTemp)
    });
    }

    type Mascota={
        name: string
    }

  return (
    <View>
      <Text>Informacion Mascota</Text>
      <Text>Codigo: </Text>
      <TextInput
        placeholder='Ingrese codigo mascota'/>
      <TouchableOpacity style={styles.btn} onPress={()=>leer()}>
                <Text style={styles.textbutton}>Guardar</Text>
      </TouchableOpacity>
      <FlatList
      data={lista}
      renderItem={({item}:{item: Mascota})=>
        <View>
            <Text>Nombre: {item.name}</Text>
            <Text>Raza: {item.name}</Text>
            <Text>Edad: {item.name}</Text>
        </View>
    }
      />
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