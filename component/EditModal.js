import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import {
    Text, View,TextInput, FlatList,TouchableOpacity
} from 'react-native';

export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id:'',
            name: '',
            foodDescription : '',
        }
    }
    showEditModal = (item) => {
        this.setState({
            _id : item._id,
            name : item.name,
            foodDescription : item.foodDescription
        })
        this.refs.modal.open();

    }
  render() {
      
    return (
        <Modal
        position = 'center'
        backdrop = {true}
        ref = {"modal"}
        style={{justifyContent:'center',height:250,backgroundColor:'white',borderRadius:30}}

         >
              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',marginTop:40}}> Thông tin món ăn</Text>
             <TextInput onChangeText={(value)=>this.setState({name:value})} style={{height:40,borderBottomColor:'gray',margin:20,borderBottomWidth:1}} placeholder={'Nhập tiêu đề'} value = {this.state.name}></TextInput>
             <TextInput onChangeText={(value)=>this.setState({foodDescription:value})} style={{height:40,borderBottomColor:'gray',margin:20,borderBottomWidth:1}} placeholder={'Nhập nội dung'} value = {this.state.foodDescription}></TextInput>
             <Text
              onPress={()=>{
                  if (this.state.name == 0 || this.state.foodDescription == 0)
                  {
                      alert("vui lòng nhập đầy đủ thông tin");
                      return;
                  }
                  this.props.parent.props.updateFood(this.state);
             
                      this.refs.modal.close();
                
                  //this.state.mang.push(object);
                 // this.refs.modal.close();
                  //this.setState({title:"",noidung:""});
                 // this.refs.flatlist.scrollToEnd();
                  }                   
                  }
             
              style={{textAlign:'center',height:30,fontSize:16,color:'white',backgroundColor:'blue',borderRadius:6,marginLeft:100,marginRight:100,marginBottom:20}}>
             SAVE</Text>

        </Modal>
     
    )
  }
}
