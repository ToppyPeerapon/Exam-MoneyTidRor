import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export const HomeScreen = () => {
  const navigation = useNavigation()
  const info = useSelector(state => state)

  const handleGoLogin = () => {
    if (!info) return
    if (!info.name) return
    if (!info.phoneNumber) return
    navigation.navigate('Login')
  }

  return (
    <View>
      <Text>Name: {info?.name}</Text>
      <Text>PhoneNumber: {info?.phoneNumber}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('Form')} />
      <Button title="Login" onPress={handleGoLogin} />
    </View>
  )
}
