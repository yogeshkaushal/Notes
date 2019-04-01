import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class NotesScreen1 extends Component {

    static navigationOptions = {
        title: '',
        headerTitleStyle: {
            fontWeight: 'bold',
            color:'white',
          },
        headerStyle: {
           
            backgroundColor: '#1C8CC1',
          },
          headerRight:(
              <TouchableOpacity style={{marginRight:15}}>
                  <Text style={{color:'white',fontSize:20}}>
                      Done
                  </Text>
              </TouchableOpacity>
          )
      }
    

    render() {

        const { navigation } = this.props;
        const message = navigation.getParam('message', 'NO-ID');

        return (
            
                <View style={{ }}>
                    <TextInput multiline = {true} placeholder='enter text'>

                    </TextInput>
                </View>
      
        )
    }   
}