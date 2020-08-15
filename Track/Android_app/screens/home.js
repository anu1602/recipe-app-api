import  React,{useState}from 'react';
import {View, Text,Button,TextInput,StatusBar,Image}from 'react-native';
import {styles} from './style.js';

export default function home({ navigation }){
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
			 source={require('../images/login.png')}
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
				color='#888'
				onPress={() =>navigation.navigate('signin')}
				/>
				<Button
				 style={styles.style_button}
				 title="sign up"
				 color='#888'
				 onPress={() =>
        			  navigation.navigate('signup')}
				 />	
			</View>	
			<Text>Forgot Password!</Text>
		</View>
		</View>
);

}

