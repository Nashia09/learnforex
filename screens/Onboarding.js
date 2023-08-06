import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding(props) {
    return <View style={{ flex: 1, paddingTop: 55 }}>

        <Image
            style={{
                flex: 2, margin: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                marginHorizontal: 20
            }}
            source={{ uri: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" }} />

        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', width: 300, alignSelf: 'center' }}
            >Learn Forex at your convinience</Text>
            <Text style={{ marginVertical: 20, textAlign: 'center', color: 'gray' }}>If you want to master forex, this is your place.
                Learn.Master.Profit
            </Text>

            <View style={{ flexDirection: 'row', marginTop:20 }}>
                <TouchableOpacity
                    style={{
                        padding: 15,
                        backgroundColor: '#e3e3e3',
                        flex: 1,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        marginRight:5,
                        flexDirection:'row',

                    }}>
                    <Text>Skip</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() =>{
                        props.navigation.navigate('login');
                    }}
                    
                    style={{
                        padding: 15,
                        backgroundColor: '#1160f2',
                        flex: 1,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        marginLeft: 5,
                        flexDirection:'row'

                    }}>
                    <Text style={{color: 'white'}}>Next</Text>
                    <Ionicons name="arrow-forward" style={{marginLeft: 10}} size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>


    </View>
}