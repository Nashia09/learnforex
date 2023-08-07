import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '../config';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  registerUser = async (email,password,name)=> {
    
    await firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(() =>{
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp:true,
          url:'https://forexapp-6f5cd.firebaseapp.com',
        })
        .then(() =>{
          alert('Verification Email Sent')
        }).catch((error) =>{
          alert(error.message)
        })
        .then(() =>{
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid).set({
            name,
            email
          }).catch((error) =>{
            alert(error.message)
          })
        })
        .catch((error =>{
          alert(error.message)
        }))
  })}
  
  
  return (
        <View style={styles.container}>
            <ImageBackground
                 source={{uri:'https://plus.unsplash.com/premium_photo-1670793631242-4813c0dbe5ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}} // Replace with your background image
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <View style={styles.illustrationContainer}>
                        <Image
                            source={require('../assets/sign.png')} // Replace with your background image
                            style={styles.illustration}
                            resizeMode="contain"
                        />
                    </View>
                    <TextInput
                        label="Full Name"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={(name) => setName(name)}
                        right={<TextInput.Icon icon="email" />}
                    />
                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        onChangeText={(email) => setEmail(email)}
                        right={<TextInput.Icon icon="email" />}
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={(password) => setPassword(password)}
                        right={<TextInput.Icon icon="eye" />}
                    />
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('homescreen');

                    }}>

                    <Button mode="contained" style={styles.button} 
                    onPress={() =>{
                      registerUser(email,password,name) 
                    }}
                    >
                        Register
                    </Button>
                      </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.goBackLink}>Already have an account? Log in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    // ... (previous styles)

    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
      },
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
        justifyContent: 'center',
        padding: 20,
        
      },
      input: {
        marginBottom: 16,
        borderRadius:40
        
      },
      button: {
        marginTop: 8,
        backgroundColor: '#3EB5E4',
      },
      socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
      },
      socialIcon: {
        marginHorizontal: 10,
      },
      createAccountLink: {
        marginTop: 20,
        color: '#3EB5E4',
        textAlign: 'center',
      },

    goBackLink: {
        marginTop: 20,
        color: '#3EB5E4',
        textAlign: 'center',
    },

    illustrationContainer: {
        alignItems: 'center',
        marginTop: 80, // Adjust the marginTop value as needed
        marginBottom: 32,
      },
      illustration: {
        width: 200,
        height: 200,
      },
});

export default RegisterScreen;
