import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '../config';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  loginUser = async(email,password) =>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password);

    }
    catch(error){
      alert(error.message);
    }
  }
  
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'https://plus.unsplash.com/premium_photo-1670793631242-4813c0dbe5ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}} // Replace with your background image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
         <View style={styles.overlay}>
          <TextInput
            label="Email"
            mode="outlined"
            activeOutlineColor='#3EB5E4'
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
            activeOutlineColor='#3EB5E4'
            right={<TextInput.Icon icon="eye" />}
          />
          <TouchableOpacity onPress={() => navigation.navigate('homescreen')}>

          <Button 
          onPress={() => {loginUser(email, password), navigation.replace('homescreen')}}
          mode="contained" 
          style={styles.button}>
            Log In
          </Button>
        </TouchableOpacity>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="facebook" size={30} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="google" size={30} color="#db4a39" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="twitter" size={30} color="#00acee" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.createAccountLink}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
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
});

export default Login;
