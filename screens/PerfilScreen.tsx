import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../config/Config'
import { ref, set, onValue } from "firebase/database";
import { FlatList, TextInput } from 'react-native-gesture-handler';

type Mascota={
    key: string
    name: string
    raza: string
    age: string
}

export default function PerfilScreen() {

    const [codigo, setcodigo] = useState("")
    const [nombre, setnombre] = useState("")
    const [raza, setraza] = useState("")
    const [edad, setedad] = useState("")

    const [lista, setlista] = useState<Mascota[]>([]);

    function leer(){
        const mascotaInfo = ref(db, 'mascotas/' + codigo);
        onValue(mascotaInfo, (snapshot) => {
        const data = snapshot.val();
        
        if(data){
            const listTemp = {key: codigo, ...data};
            setlista([listTemp]);
            Alert.alert('Mensaje', 'Mascota encontrada');
        }else{
            setlista([]);
            Alert.alert('Mensaje', `No se encontró ninguna mascota con el código: ${codigo}`);
        }
    });
    }

    

  return (
    <View>
      <Text>Informacion Mascota</Text>
      <Text>Codigo: </Text>
      <TextInput
        placeholder='Ingrese codigo mascota'
        keyboardType='numeric'
        value={codigo}
        onChangeText={setcodigo}/>
      <TouchableOpacity style={styles.btn} onPress={()=>leer()}>
                <Text style={styles.textbutton}>Buscar</Text>
      </TouchableOpacity>
      <FlatList
      data={lista}
      renderItem={({item}:{item: Mascota})=>(
        <View>
            <Text>Nombre: {item.name}</Text>
            <Text>Raza: {item.raza}</Text>
            <Text>Edad: {item.age}</Text>
        </View>
     )}
     keyExtractor={item=>item.key}
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
        backgroundColor: 'blue'
      },
      textbutton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
      },
})