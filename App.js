import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [courseGoals,setCourseGoals]=useState([]);
  const [isAddMode,setIsAddMode]=useState(false);

  const addGoalHandler=(enteredGoal)=>{
    console.log(courseGoals)
    setCourseGoals([...courseGoals,{key:Math.random().toString(),value:enteredGoal}])
    setIsAddMode(false);
  }
  
  const removeGoalHandler= goalId=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter(goal=>goal.key!==goalId)
    });
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}></Button>
    <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler}/>
   <ScrollView>
   <View>
     <FlatList 
     keyExtractor={ (item,index)=>item.id}
     data={courseGoals}
      renderItem={itemData=>
       (<GoalItem onDelete={removeGoalHandler}itemData={itemData}/>)
     }/>
   
    </View>
   </ScrollView>
  </View>
    
    
  );
}

const styles= StyleSheet.create({
  screen:{
    padding:50
  }
 
  
});
