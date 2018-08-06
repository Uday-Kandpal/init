import React from 'react';
import 
{ StyleSheet,
 Text,
 View,
 TouchableOpacity,
 Dimensions,
 Picker,
 FlatList,
 RefreshControl,
 ProgressBarAndroid
 } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  state = {language: "cpp", refreshing: true}
  render() {
    return (	
      <View style={styles.container}>
	 <MapView
	    initialRegion={{
	      latitude: 37.78825,
	      longitude: -122.4324,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	    }}
	    style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').height}}
	/>
        <TouchableOpacity
		style={styles.buttonStyle}
		onPress={() => {console.log('Clicked')}}
	>
	<Text style={{color:'#fff', fontSize:30}}>Search The Area</Text>
	</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   buttonStyle:{
	height: 100,
	width: Dimensions.get('screen').width * 0.9,
	backgroundColor: 'blue',
	alignItems: 'center',
	justifyContent:'center',
	marginBottom: 200
  }
});
