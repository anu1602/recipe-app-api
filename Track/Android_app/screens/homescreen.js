import  React,{useState}from 'react';
import {View, Text,Button,TextInput,StatusBar,Image,Picker}from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';

export default function home({ navigation }){
console.log(navigation)
const [username,updateusername]= useState('');
const [password,updatepassword]= useState('');

return(
		<View style={styles.container1}>
		<StatusBar 
		 backgroundColor="#1c313a"
		 barStyle="light-content"
		/>
		<View style={styles.container2}>
			<Image
			 style={styles.images}
			 source={require('/home/maria/new_app/new_app/screens/login.png')}
			/>
			<TextInput
				style={styles.input_style}
				placeholder='username or email'
				onChangeText={(username)=> updateusername(username)}
				returnKeyType="next"
			/>
			<TextInput
				style={styles.input_style}
				placeholder='password'
				secureTextEntry
				onChangeText={(password)=> updatepassword(password)}
				returnKeyType="go"
			/>
			<View style={styles.Button_style}>
				<Button 
				style={styles.style_button}
				title="sign in"
				onPress={() =>props.navigation.navigate('signin')}
				/>
				<Button
				 style={styles.style_button}
				 title="sign up"
				 onPress={() =>
        			  navigation.navigate('signup')}
				 />	
			</View>	
			<Text>Forgot Password!</Text>
		</View>
		</View>
);

}

