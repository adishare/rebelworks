import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchRelatedMovies } from '../stores/actions/relatedMovieActions';

class RelatedMovies extends Component {

    componentDidMount() {
        this.props.fetchRelatedMovies(this.props.movie.id)
    }

    render() {
        if(this.props.loading) {
            return (
                <View style={{flex : 1, padding : 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.props.relatedMovies.results}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator}/>
                        )
                    }}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.showDetail(item)
                                    }}>
                                    <Image style={styles.cardImage} source={{uri:`https://image.tmdb.org/t/p/w342${item.poster_path}`}}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor:"white",
    },
    listContainer:{
        alignItems:'center'
    },
    separator: {
        marginTop: 5,
    },
    card:{
        padding : 5,
        borderRadius: 4,
        shadowRadius: 4,
        marginVertical: 5,
        backgroundColor:"white",
        flexBasis: '47%',
        marginHorizontal: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
        borderBottomWidth: 0
    },
    cardHeader: {
        padding : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardImage:{
        // flex: 1,
        height: 238,
        width: null,
    },
    title:{
        fontSize:15,
        flex:1,
    },

});   


const mapStateToProps = (state) => {
    return {
        loading : state.relatedMovies.loading,
        relatedMovies : state.relatedMovies.relatedMovies,
        error : state.relatedMovies.error
    }
}
  
const mapDispatchToProps = (dispatch) => ({
    fetchRelatedMovies: (movieId) => {dispatch(fetchRelatedMovies(movieId))}
})
  
export default connect(mapStateToProps, mapDispatchToProps)(RelatedMovies)
  