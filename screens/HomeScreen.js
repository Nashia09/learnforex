import { Ionicons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

export default function HomeScreen() {

    const courses = ['Scalping', 'Price Action', 'Indicators','Price Action', 'Indicators'];
    return <View style={{ flex: 1, paddingTop: 40, paddingHorizontal: 12 }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20
        }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome, Kofi</Text>
                <View style={{ flexDirection: 'row', marginLeft: 5, alignItems: 'center' }}>
                    <Ionicons style={{ color: 'gray' }} siz name='location' />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Abuja, Nigeria</Text>
                </View>
            </View>
            <Ionicons color={"gray"} size={20} style={{ paddingHorizontal: 20 }} name='notifications' />
            <Ionicons color={"gray"} size={20} name='grid-outline' />
        </View>
        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#e3e3e3', marginVertical: 10, borderRadius: 20 }}>
            <Ionicons name="search" size={24} color="gray" />
            <TextInput style={{ paddingHorizontal: 10, flex: 1 }} placeholder='Search for a course here' />
            <Ionicons name='filter' style={{}} size={20} />
        </View>
        <View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >

                <View style={{ flexDirection: 'row' }}>

                    {courses.map((item,key) => (
                        <View style={{
                            borderWidth: 0.5,
                            padding: 10,
                            borderColor: 'gray',
                            borderRadius: 50,
                            marginRight: 20
                        }}>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    </View>
}