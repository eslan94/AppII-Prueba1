import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref, update } from 'firebase/database'
import { db } from '../config/Config'

type EditarScreenProps = {
    route:{
        params: {
            codigo: string;
        };
    };
};

type Mascota={
    key: string
    name: string
    raza: string
    age: string
}


export default function EditarScreen() {

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
            //const listTemp = {key: codigo, ...data};
            setnombre(data.name)
            setraza(data.raza)
            setedad(data.age)
        }else{
            Alert.alert('Mensaje', `No se encontró ninguna mascota con el código: ${codigo}`);
        }
    });
    }

    const actualizar = ()=>{
        const updates = {
            name: nombre,
            raza: raza,
            age: edad
        }
        update(ref(db, 'mascotas/' + codigo), updates)
        .then(()=>{
            Alert.alert('Mensaje', 'Mascota actualizada correctamente');
        })
        .catch((error)=>{
            Alert.alert('Mensaje', 'Error al actualizar la mascota');
        });
    }

    useEffect(()=>{
        leer();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Información de la Mascota</Text>
      <Text>Informacion Mascota</Text>
      <Text>Codigo: </Text>
      <TextInput
        placeholder='Ingrese codigo mascota'
        keyboardType='numeric'
        onChangeText={setcodigo}
        value={codigo}/>
      <TouchableOpacity style={styles.btn} onPress={()=>leer()}>
                <Text style={styles.textbutton}>Buscar</Text>
      </TouchableOpacity>
      <Text>Nombre: </Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setnombre}
      />
      <Text>Raza: </Text>
      <TextInput
        style={styles.input}
        value={raza}
        onChangeText={setraza}
      />
      <Text>Edad: </Text>
      <TextInput
        style={styles.input}
        value={edad}
        onChangeText={setedad}
      />
      <TouchableOpacity style={styles.btn} onPress={actualizar}>
        <Text style={styles.textbutton}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
      btn: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
      },
      textbutton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
      },
})