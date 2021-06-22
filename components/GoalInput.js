import React,{ useState} from 'react';
import { View, TextInput,Button, Modal} from 'react-native';

const GoalInput = ({addGoalHandler,visible}) => {

    const [enteredGoal,setEnteredGoal]=useState('');
    
    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
       
      }
    const addGoal= ()=>{

      addGoalHandler(enteredGoal);
     removeGoal();
    }
    const removeGoal= ()=>{

      
      setEnteredGoal('');
    }
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          
          <TextInput placeholder="Course Goal" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
         <View style={styles.buttonContainer}>
         <Button title="ADD" onPress={addGoal}/>
          <Button title="CANCEL" onPress={removeGoal}/>
         </View>
      </View>
      </Modal>
    )
}
const styles={
    inputContainer:{
        flex:1,justifyContent:'center',alignItems:'center'
      },
      input:{
        borderBottomColor:'black',borderWidth:1,padding:10,width:'80%',marginBottom:10
      },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'40%'
    }

}
export default GoalInput
