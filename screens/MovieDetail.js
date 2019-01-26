import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RelatedMovies from '../components/RelatedMovies';
import { fetchRelatedMovies } from '../stores/actions/relatedMovieActions';

export class MovieDetail extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('movie').title
        }
    }

    showDetail = (movie) => {
        this.props.navigation.navigate('MovieDetail', { movie })
        this.props.fetchRelatedMovies(movie.id)
    }

    render() {
        const movie = this.props.navigation.state.params.movie
        return (
            <View style={styles.container} >
                <ScrollView >
                    <View style={{alignItems:'center', marginHorizontal:30}}>
                        <Image 
                            style={styles.poster} 
                            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
                        />
                        <Text style={styles.title}>
                            {movie.title}
                        </Text>
                        <Text style={styles.h2}>
                            {new Date(movie.release_date).getFullYear()}
                        </Text>
                        <Text style={styles.description}>
                            {movie.overview}
                        </Text>
                    </View>
                    
                    <View style={styles.separator}></View>

                    <View style={{alignItems:'center', marginHorizontal:30}}>
                        <Text style={styles.h2}>
                            Related Movies
                        </Text>
                    </View>

                    <RelatedMovies 
                        movie={movie}
                        showDetail={ this.showDetail }
                    ></RelatedMovies>
                
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    poster:{
        marginTop:10,
        width:342,
        height:513,
    },
    title:{
        marginTop:15,
        fontSize:28,
        color: '#009900',
        fontWeight:'bold'
    },
    h2:{
        marginTop:10,
        fontSize:20,
        color:"gray",
        fontWeight:'bold'
    },
        description:{
        textAlign:'center',
        marginTop:10,
        color:"#696969",
    },
    separator:{
        height:2,
        backgroundColor:"#009900",
        marginTop:20,
        marginHorizontal:30
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
