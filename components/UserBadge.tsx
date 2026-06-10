import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface UserBadgeProps{
    name:string;
    avatar:string;
}
export default function UserBadge({name,avatar}:UserBadgeProps) {
  return (
    <View>
      <Text> 
        {avatar}
      </Text>
       <Text> 
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})