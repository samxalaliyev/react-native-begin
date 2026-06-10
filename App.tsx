import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StaticBanner from './components/StaticBanner'
import UserBadge from './components/UserBadge'

export default function App() {
  const users=[
    {name:"SAMXAL", avatar:"samxal.com"},
    {name:"Elya", avatar:"elya.com"}
  ]

  return (
    <View style={styles.container}>
      <Text>App</Text>
      {users.map((u,index)=>(
      <UserBadge avatar={u.avatar} name={u.name} key={index}/>
      ))}
      <StaticBanner/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  }
})