import React, {useState} from 'react';
 import {StyleSheet, View, Text, Button, Platform} from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import { Icon } from '@rneui/themed';
 import { Alert } from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 

 const Tab = createBottomTabNavigator();

 const App = () => {
   const navigation = useNavigation();
   const [isPickerShow, setIsPickerShow] = useState(false);
   const [date, setDate] = useState(new Date(Date.now()));
   navigation.setOptions({ title: 'Agendar Cita Medica'  })
   const [mode, setMode] = useState('date');
   const [isTimeShow,  setIsTimeShow] = useState(false);
   const  [time, setTime] = useState(new Date(Date.now()));
   const [show, setShow] = useState(false);
   const [text, setText] = useState('Empty');

   const showPicker = () => {
     setIsPickerShow(true);
   };
   const showTime = () => {
    setIsTimeShow(true);
  };

   const onChange = (event, value) => {
     setDate(value);
     if (Platform.OS === 'android') {
       setIsPickerShow(false);
     }
   };
   const onChangeTime = (event, value) => {
    setTime(value);
    if (Platform.OS === 'android') {
      setIsTimeShow(false);
    }
  };

   
   const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

   

   return (
     <View style={styles.container}>
       {/* Display the selected date */}
       <View style={styles.pickedDateContainer}>
         <Text style={styles.pickedDate}>{date.toLocaleDateString()}</Text>
       </View>
       <View style={styles.pickedDateContainer}>
         <Text style={styles.pickedDate}>{time.toLocaleTimeString()}</Text>
       </View>

       {/* The button that used to trigger the date picker */}
       {!isPickerShow && (
        <View style={styles.btnContainer}>
           <Button title="Selecionar Fecha" color="purple" onPress={showPicker}  />
         </View>
       )}
        {!isTimeShow && (
        <View style={styles.btnContainer}>
           <Button title="Selecionar la hora" color="purple" onPress={showTime}  />
         </View>
       )} 
        <View style={styles.btnContainer}>
           <Button title="Siguente" color="purple" onPress= {() => navigation.navigate("Citas")} />
         </View>

       {/* The date picker */}
       {isPickerShow && (
         <DateTimePicker
           value={date}
           mode={'date'}
           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           is24Hour={true}
           onChange={onChange}
           style={styles.datePicker}
         />
       )}
         {isTimeShow && (
         <DateTimePicker
           value={time}
           mode={'time'}
           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           is24Hour={true}
           onChange={onChangeTime}
           style={styles.datePicker}
         />
       )}
       

     </View>
   );
 };

 // Kindacode.com
 // just add some styles to make our app look more beautiful
 // This is not the focus of this article
 const styles = StyleSheet.create({
   container: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     flex: 1,
     justifyContent: 'center',
     padding: 30,
   },
   pickedDateContainer: {
     padding: 20,
     backgroundColor: '#eee',
     borderRadius: 10,
   },
   pickedDate: {
     fontSize: 18,
     color: 'black',
   },
   btnContainer: {
     padding: 30,
   },
   // This only works on iOS
   datePicker: {
     width: 320,
     height: 260,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'flex-start',
   },
 });

export default App;


 