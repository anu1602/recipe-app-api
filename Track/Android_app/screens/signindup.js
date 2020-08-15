import  React,{useState}from 'react';
import {TouchableOpacity,View, Text,Button,TextInput,StatusBar,Image,Picker}from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import {styles} from './style.js';

export default function signin(){
const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      
	<View style={styles.container5}>
	<View style={styles.container4}>
	 <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.images1}
        />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Account" />
        </View>
       <View style={styles.Button_style1}>
	 <Button color="#888" title="Medical History" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Messages" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Most recent" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="Languages" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Feedback" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="settings" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="help" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="about" />
        </View>
	</View>
     
     
    );
  }

 return(
       <View style={styles.container5}>
        <TouchableOpacity activeOpacity = { .5 } onPress={openImagePickerAsync  }>
 
          <Image source={require('./images/image.png')} style = {{padding:10,width: 200, height: 200}} />
          
        </TouchableOpacity>
        
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Account" />
        </View>
       <View style={styles.Button_style1}>
	 <Button color="#888" title="Medical History" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Messages" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Most recent" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="Languages" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="Feedback" />
        </View>
	<View style={styles.Button_style1}>
	 <Button color="#888" title="settings" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="help" />
        </View>
        <View style={styles.Button_style1}>
	 <Button color="#888" title="about" />
        </View>
	</View>
       );

}
