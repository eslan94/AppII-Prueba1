import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

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

  return (
    <View>
      <Text>EditarScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})