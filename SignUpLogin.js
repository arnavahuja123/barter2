import React,{Component} from 'react';
import db from "../Config"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    userSignUp=(email,password, confirmPassword)=>{
        if(password!==confirmPassword){
            return Alert.alert("password does not match")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            db.collection("users").add({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                contact:this.state.contact,
                email_ID:this.state.emailID,
                address:this.state.address,
            })
            return Alert.alert(
                "user added successfully",
                "",
                [
                    {text:"ok", onPress:()=>this.setState({"isModalVisible":false})}
                ]
            )
        })
        .catch(function(error){
            var errorCode =error.code;
            var errorMessage= error.message;
            return Alert.Alert(errorMessage)
        })}
    } 
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                {
                    this.showModal()
                }</View>
                <View>
                    <Text style={styles.title}>Barter System</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                        this.setState({
                            emailID:text
                        })
                    }}
                    />
                    

                    <TextInput
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeholder="enterPassword"
                    onChangeText={(text)=>{
                        this.setState({
                            Password:text
                        })
                    }}
                    />

                    



                    <TouchableOpacity style={[styles.button, {marginBottom:20,marginTop:20}]}
                        onPress={()=>{
                            this.userLogin(this.state.emailID,this.state.password)
                        }}>
                            <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button }
                        onPress={()=>{
                            this.userSignUp(this.state.emailID,this.state.password)
                        }}>
                            <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
   

})