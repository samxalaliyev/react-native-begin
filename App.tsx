import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const[visible, setVisible] = useState(false);

  return (
    <View style={styles.container}> 

    <Button
   title='Modal AC'
   onPress={()=>setVisible(true)} 
    />
    <Modal
    transparent
    animationType='fade'
    visible={visible}
    // onRequestClose={()=>setVisible(false)}
    >

      <View style={styles.backDrop}>

       <Button
   title='Modal Bagla'
   onPress={()=>setVisible(false)} 
    />

      </View>

    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  backDrop:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f90847'
  }
})