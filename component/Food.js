import React, { Component } from 'react';

import {
    Text, View,TextInput, FlatList,TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import {fetchFood,addFood,updateFood,updateSucceeded,DeleteFood,DeleteSucceeded} from '../action/actionCreator';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';


  class Food extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', foodDescription: '' };
    }

    render() {


        return (
            
            
           //console.log( this.props.movies),
            <View style={{ flex: 1}}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                        placeholder='Enter new food name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ foodDescription: text })}
                        value={this.state.foodDescription}
                        placeholder='foodDescription'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                            this.props.fetchFood();               
                        }}>
                    <Text
                        style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                     >
                           
                        Fetch movies
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => {
                        if (this.state.name === '' || this.state.foodDescription === '')
                        {
                            alert('bạn phải điền đầy đủ thông tin');
                            return;
                        }
                        this.props.addFood({name:this.state.name,foodDescription:this.state.foodDescription})
                       

}}>
                    <Text
                        style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                      >
                        Add Movie
                    </Text>
                    </TouchableOpacity>
                </View>             
                <FlatList
                
                data = {this.props.food}
                renderItem = {({item, index}) =>{
                    return <FlatListItem item={item} index = {index} parent = {this}/>
                }}
                
                    keyExtractor = {(item) => item._id}>

                </FlatList>
                <EditModal ref = {"editmodal"} parent = {this}/>
             
            </View>);
    }
}
const mapStateToProps = (state) => {        
    return {        
        food: state.foodReducer
    }
};


export default  connect(mapStateToProps, {fetchFood,addFood,updateFood,updateSucceeded,DeleteFood,DeleteSucceeded})(Food);


