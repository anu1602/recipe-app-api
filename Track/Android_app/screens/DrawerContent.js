import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Drawer,
    Text,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {account} from './account.js';
import Medical_history from './Medical_history.js';
import My_appointments from './My_appointments.js';
import My_Test_Reports from './My_Test_Reports.js';
import My_Medication from './My_Medication.js';
import My_Prescription from './My_Prescription.js';
import Feedback from './Feedback.js';
import Settings from './Settings.js';
import Help from './Help.js';
import About from './About.js';

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../images/image.png')}
				backgroundColor="fff"
                                size={100}
                            />
                        </View>
                        <Text>Maria Philna</Text>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            
                            label="Account"
                            onPress={() => {props.navigation.navigate('Account')}}
                        />
                        <DrawerItem 
                            label="Medical history"
                            onPress={() => {props.navigation.navigate('Medical_history')}}
                        />
                        <DrawerItem 
                            label="My Appointments"
                            onPress={() => {props.navigation.navigate('My_appointments')}}
                        />
			<DrawerItem 
                            label="My Prescriptions"
                            onPress={() => {props.navigation.navigate('My_Prescription')}}
                        />                        
			<DrawerItem 
                            label="My Test Reports"
                            onPress={() => {props.navigation.navigate('My_Test_Reports')}}
                        />
                        <DrawerItem 
                            label="My Medication"
                            onPress={() => {props.navigation.navigate('My_Medication')}}
                        />			
			<DrawerItem 
                            label="Feedback"
                            onPress={() => {props.navigation.navigate('Feedback')}}
                        />
                        <DrawerItem 
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem 
                            label="Help"
                            onPress={() => {props.navigation.navigate('Help')}}
                        />
                        <DrawerItem 
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                </View>
	    </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });
