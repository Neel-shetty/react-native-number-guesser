import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: "center",
    color: 'white',
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 15
  },
})