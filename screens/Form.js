import { Button, Text, TextInput, View } from "react-native"
import * as React from 'react'
import { updateInfo } from "../redux/info/Action"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"

export const FormScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [name, setName] = React.useState()
  const [phoneNumber, setPhoneNumber] = React.useState()
  const [validationMessage, setValidationMessage] = React.useState()

  const handleSubmit = () => {
    const validatePhoneNumber = /\d{10}/.test(phoneNumber)
    if (!validatePhoneNumber || phoneNumber === undefined) {
      setValidationMessage('Wrong format phone number')
      return
    }

    if (!name) {
      setValidationMessage('Empty name')
      return
    }

    setValidationMessage()
    dispatch(updateInfo({ name, phoneNumber }))
    navigation.goBack()
  }

  return (
    <View>
      <Text>Name: </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={textChanged => setName(textChanged)}
        value={name}
      />
      <Text>Phone: </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={textChanged => setPhoneNumber(textChanged)}
        value={phoneNumber}
      />
      <Text style={{ color: 'red' }}>{validationMessage}</Text>
      <Button title="submit" onPress={handleSubmit} />
    </View>
  )
}
