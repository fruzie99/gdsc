import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo'

export default function _layout() {
  return (
    <View>
        <Tabs>
            <Tabs.Screen name="myevent"/>
            <Tabs.Screen name="profile"/>
            <Tabs.Screen name="discover"/>
        </Tabs>
      <Text>_layout</Text>
    </View>
  )
}