import * as React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export const LoginScreen = () => {
  const info = useSelector(state => state)

  return (
    <View>
      <Text>Name: {info?.name}</Text>
      <Text>PhoneNumber: {info?.phoneNumber}</Text>
    </View>
  )
}
