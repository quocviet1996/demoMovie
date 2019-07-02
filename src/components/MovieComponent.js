import React, { Component } from 'react';


import {
    TouchableOpacity,
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }
    render() {
        return (
           
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder='Release year'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <TouchableOpacity                         onPress={() => {
                            this.props.onFetchMovies();                            
                        }}>
                    <Text
                        style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                       
>
                        Fetch movies
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text
                        style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                      
                        onPress={() => {

                        }}>
                        Add Movie
                    </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17, 
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.id},releaseYear=${item.name}`}
                    </Text>
                    }
                />
            </View>);
    }
}
