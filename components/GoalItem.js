import React from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';
const GoalItem = ({itemData,onDelete}) =>{
    
    return (
        <TouchableWithoutFeedback onPress={onDelete.bind(this,itemData.item.key)}>
            <View style={styles.listItem} >
                <Text >{itemData.item.value}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}
export default GoalItem;
const styles={
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginTop:10,
        marginVertical:10
      }
}