import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class MovieCard extends Component {

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.boxHeader}>

                    <View style={{flexDirection:'row', width : 200}}>
                        <View>
                            <Text style={{fontSize: 16, fontWeight:'bold', flexWrap : 'wrap', marginLeft : 10, color: '#009900'}}>{this.props.movie.title}</Text>
                            <Text style={{flexWrap : 'wrap', marginLeft : 10}}>{this.props.movie.overview.slice(0,150)} {this.props.movie.overview.length > 150 && '...'} </Text>
                        </View>
                    </View>

                    <View style={styles.boxHeader}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.showDetail(this.props.movie)
                            }}>
                            <Image
                                style={{width: 92, height: 138}}
                                source={{uri: `https://image.tmdb.org/t/p/w92${this.props.movie.poster_path}` }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            
                <View style={[styles.boxHeader, {padding : 10}]}>
                    <Text>Popularity {this.props.movie.popularity}</Text>
                    <Text>Votes {this.props.movie.vote_count}</Text>
                    <Text>Rating  {this.props.movie.vote_average}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    box : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        margin : 5,
        width : '97%',
        padding : 10
    },
    boxHeader : {
        justifyContent :'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
});
