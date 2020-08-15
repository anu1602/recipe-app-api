import  React from 'react';
import {View, Text,Button,TextInput,StatusBar,Image}from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './style.js';
import Account from './account.js';
import Home from './homes.js';
import Medical_history from './Medical_history.js';
import My_appointments from './My_appointments.js';
import My_Test_Reports from './My_Test_Reports.js';
import My_Medication from './My_Medication.js';
import My_Prescription from './My_Prescription.js';
import Feedback from './Feedback.js';
import Settings from './Settings.js';
import Help from './Help.js';
import About from './About.js';
import {DrawerContent} from './DrawerContent.js'

	
const Drawer = createDrawerNavigator();
const HomeStack=createStackNavigator();
const AccountStack=createStackNavigator();
const Medical_historyStack=createStackNavigator();
const My_appointmentsStack=createStackNavigator();
const My_Test_ReportsStack=createStackNavigator();
const My_MedicationStack=createStackNavigator();
const My_PrescriptionStack=createStackNavigator();
const FeedbackStack=createStackNavigator();
const SettingsStack=createStackNavigator();
const HelpStack=createStackNavigator();
const AboutStack=createStackNavigator();

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const AccountStackScreen = ({navigation}) => (
<AccountStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <AccountStack.Screen name="Account" component={Account} options={{
        title:'Account',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</AccountStack.Navigator>
);

const Medical_historyStackScreen = ({navigation}) => (
<Medical_historyStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <Medical_historyStack.Screen name="Medical_history" component={Medical_history} options={{
        title:'Medical History',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</Medical_historyStack.Navigator>
);


const My_appointmentsStackScreen = ({navigation}) => (
<My_appointmentsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <My_appointmentsStack.Screen name="My_appointments" component={My_appointments} options={{
        title:'My Appointments',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</My_appointmentsStack.Navigator>
);


const My_Test_ReportsStackScreen = ({navigation}) => (
<My_Test_ReportsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <My_Test_ReportsStack.Screen name="My_Test_Reports" component={My_Test_Reports} options={{
        title:'My Test Reports',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</My_Test_ReportsStack.Navigator>
);


const My_MedicationStackScreen = ({navigation}) => (
<My_MedicationStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <My_MedicationStack.Screen name="My_Medication" component={My_Medication} options={{
        title:'My Medication',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</My_MedicationStack.Navigator>
);


const My_PrescriptionStackScreen = ({navigation}) => (
<My_PrescriptionStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <My_PrescriptionStack.Screen name="My_Prescription" component={My_Prescription} options={{
        title:'My Prescriptions',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</My_PrescriptionStack.Navigator>
);


const FeedbackStackScreen = ({navigation}) => (
<FeedbackStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <FeedbackStack.Screen name="Feedback" component={Feedback} options={{
        title:'Feedback',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</FeedbackStack.Navigator>
);
const SettingsStackScreen = ({navigation}) => (
<SettingsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SettingsStack.Screen name="Settings" component={Settings} options={{
        title:'Settings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</SettingsStack.Navigator>
);

const HelpStackScreen = ({navigation}) => (
<HelpStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HelpStack.Screen name="Help" component={Help} options={{
        title:'Help',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HelpStack.Navigator>
);

const AboutStackScreen = ({navigation}) => (
<AboutStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#888',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={About} options={{
        title:'About',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#888" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</AboutStack.Navigator>
);

export default function signin() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
     <Drawer.Screen name="Home" component={HomeStackScreen} />
     <Drawer.Screen name="Account" component={AccountStackScreen} />
     <Drawer.Screen name="Medical_history" component={Medical_historyStackScreen} />
     <Drawer.Screen name="My_appointments" component={My_appointmentsStackScreen} />
     <Drawer.Screen name="My_Test_Reports" component={My_Test_ReportsStackScreen} />
     <Drawer.Screen name="My_Medication" component={My_MedicationStackScreen} />
     <Drawer.Screen name="My_Prescription" component={My_PrescriptionStackScreen} />
     <Drawer.Screen name="Feedback" component={FeedbackStackScreen} />
     <Drawer.Screen name="Settings" component={SettingsStackScreen} />
     <Drawer.Screen name="Help" component={HelpStackScreen} />
     <Drawer.Screen name="About" component={AboutStackScreen} />  
</Drawer.Navigator>
  );
}


