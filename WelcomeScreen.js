import React,{Component} from 'react';
import db from "../Config"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailID:"",
            password:"",
            firstName:"",
            lastName:"",
            address:"",
            contact:"",
            confirmPassword:"",
            isModalVisible:"false"
        }
    }
   
    showModal=()=>{
        return(
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{width:"100%"}}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text style={styles.modalTitle}>Registration</Text>
                            <TextInput
                            style={styles.formTextInput}
                            placeholder={"first name"}
                            maxLength={8}
                            onChangeText={(text)=>{
                                this.setState({
                                    firstName:text
                                })
                            }}
                            /> 
                            
                            <TextInput
                            style={styles.formTextInput}
                            placeholder={"last name"}
                            maxLength={8}
                            onChangeText={(text)=>{
                                this.setState({
                                    lastName:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.formTextInput}
                            placeholder={"contact"}
                            maxLength={10}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                                this.setState({
                                    contact:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.formTextInput}
                            placeholder={"address"}
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                   address:text
                                })
                            }}
                            />

<TextInput
                            style={styles.formTextInput}
                            placeholder={"email"}
                            keyboardType={"email-address"}
                            onChangeText={(text)=>{
                                this.setState({
                                    email:text
                                })
                            }}
                            />

<TextInput
                            style={styles.formTextInput}
                            placeholder={"password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}
                            />

<TextInput
                            style={styles.formTextInput}
                            placeholder={"confirm password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    confirmPassword:text
                                })
                            }}
                            />
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity style={styles.registerButton}
                                onPress={()=>{
                                    this.userSignUp(this.state.emailID,this.state.password,this.state.confirmPassword)
                                }}>
                                    <Text style={styles.registerButton}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBackButton}>
                            <TouchableOpacity style={styles.cancelButton}
                            onPress={()=>
                                this.setState({"isModalVisible":false})
                            }>

                            </TouchableOpacity>
                            </View>  
                            </KeyboardAvoidingView>
                    </ScrollView>

                </View>
                </Modal>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                {
                    this.showModal()
                }</View>
                <View>
                    <Text style={styles.title}>Book Santa</Text>
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