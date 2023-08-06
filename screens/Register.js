import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
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
                        right={<TextInput.Icon icon="email" />}
                    />
                    <TextInput
                        label="Email"
                        mode="outlined"
                        style={styles.input}
                        right={<TextInput.Icon icon="email" />}
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                        right={<TextInput.Icon icon="eye" />}
                    />
                    <Button mode="contained" style={styles.button} 
                    onPress={() =>{
                        navigation.navigate('homescreen');
                    }}
                    >
                        Register
                    </Button>
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
