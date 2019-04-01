import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'



export default class Notes extends Component {




    constructor(props) {
        super(props)

        this.state = {
            ArrayList: ['harru', 'ram', 'shiv', 'harru', 'ram', 'shiv', 'harru', 'ram', 'shiv']
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
        },
        headerStyle: {

            backgroundColor: '#1C8CC1',
        },
    }




    render() {
        return (
            <View style={{ flex: 1, }}>
                <FlatList style={{ flexGrow: 0 }}
                    data={this.state.ArrayList}
                    renderItem={({ item }) =>
                        <View style={styles.flatlistView}>
                            <TouchableOpacity>
                                <Text style={styles.flatlistItemText}>{item}</Text>
                            </TouchableOpacity>
                        </View>}>
                </FlatList>
                <View style={styles.ViewAdd}
                >
                    <TouchableOpacity style={styles.touchableAdd}
                        onPress={() => {
                            this.props.navigation.navigate('NotesAdd', {
                                message: 'This is react Navigation'
                            })
                        }}

                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 30
                        }}>
                            +
                                  </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    flatlistItemText: {
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 10,
        color: 'black'
    },
    flatlistView: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray'

    },
    touchableAdd: {
        backgroundColor: '#1C8CC1',
        height: 60,
        width: 60,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewAdd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    }

})