import React, { Component } from 'react';

import {
    Text, View,TextInput, FlatList,TouchableOpacity
} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
  render() {
      const swipeSetting = {
          autoClose : true,
          right : [
              {
              
             onPress:() =>{
                 this.props.parent.props.DeleteFood(this.props.item);

              },
              text  : 'Delete',type:'delete'
              },
              {
                  onPress : () =>{
                      this.props.parent.refs.editmodal.showEditModal(this.props.item);

                  },
                  text: 'Edit' ,type : 'primary',
              }

          ]

          
      }
    return (
        <Swipeout {...swipeSetting}>
            <View style ={{flex:1}}>
        
        <Text style={{
            padding: 10,
            fontWeight: 'bold',
            fontSize: 17, 
            color: 'white',
            backgroundColor: (this.props.item % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
        }}>
            {`Food: ${this.props.item.name},foodDescription : ${this.props.item.foodDescription}`}
        </Text>
        </View>
        </Swipeout>
     
    )
  }
}

