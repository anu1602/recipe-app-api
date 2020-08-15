import  React,{useState}from 'react';
import {View, Text,Button,TextInput,Picker}from 'react-native';

import {styles} from './style.js';

export default function signup(){
const [username,updateusername]= useState('');
const [password,updatepassword]= useState('');
const [DOB,updateDOB]= useState('');
const [selectedValue, setSelectedValue] = useState('');
const [address,updateaddress]= useState('');
const [caddress,updatecaddress]= useState('');
return(
		<View style={styles.container1}>
		<Text style={styles.register_text}>
		Register{username}</Text>
		<TextInput
			style={styles.signup_input_style}
			placeholder='username'
			onChangeText={(username)=> updateusername(username)}
			returnKeyType="next"
		/>
		<TextInput
			style={styles.signup_input_style}
			placeholder='password'
			secureTextEntry
			onChangeText={(password)=> updatepassword(password)}
			returnKeyType="next"
	        />
		<TextInput
			style={styles.signup_input_style}
			placeholder='DOB'
			onChangeText={(DOB)=> updateDOB(DOB)}
			returnKeyType="next"
		/>
		<View style={styles.container3}>
		<Picker
		selectedValue={selectedValue}
		style={{ height: 35, width: 200,color:'#888'}}
		onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
	        mode='dropdown'
		>
		
		<Picker.Item label="Male" value="Male" />
		<Picker.Item label="Female" value="Female" />
	        </Picker>
		</View>
		<TextInput
			multiline={true}
			style={styles.signup_input_style}
			placeholder='permanent address'
			onChangeText={(address)=> updateaddress(address)}
			returnKeyType="next"
	        />
		<TextInput
			style={styles.signup_input_style}
			placeholder='current address'
			onChangeText={(caddress)=> updatecaddress(caddress)}
			returnKeyType="next"
		/>
		<Button
			 style={styles.Button_style}
			 title="submit"	
		/>
		</View>
);

}

