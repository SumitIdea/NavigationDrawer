import  React from 'react';
import { Text, View,StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { createDrawerNavigator }from '@react-navigation/drawer';
import { NavigationContainer }from '@react-navigation/native';
function HomeScreen() {
return (
	<View style={{ flex: 1, alignItems: 'center',
				justifyContent: 'center' }}>
		<Text>Home page</Text>
	</View>
);
}

function NotificationsScreen() {
return (
	// <View style={{ flex: 1, alignItems: 'center',
	// 			justifyContent: 'center' }}>
	// <Text>Notifications Page</Text>
	// </View>

	<View style = {styles.container}>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
             
             <TouchableOpacity
                style = {styles.submitButton}

				
                // onPress = {
                //    () => this.login(this.state.email, this.state.password)
                // }
				>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
          </View>
);
}

function AboutScreen() {
return (
	<View style={{ flex: 1, alignItems: 'nter',
				justifyContent: 'center' }}>
	<Text>About Page</Text>
	</View>
);
}
const Drawer = createDrawerNavigator();

export default function App() {
return (
	<NavigationContainer>
	<Drawer.Navigator initialRouteName="Home">
		<Drawer.Screen name="Home" component={HomeScreen} />
		<Drawer.Screen name="Notifications"
					component={NotificationsScreen} />
		<Drawer.Screen name="About" component={AboutScreen} />
	</Drawer.Navigator>
	</NavigationContainer>



);
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white',
       textAlign: 'center'
    }
 })
 