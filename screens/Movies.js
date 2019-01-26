import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchMovies } from '../stores/actions/movieActions'
import MovieCard from '../components/MovieCard'

export class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    showDetail = (movie) => {
        this.props.navigation.navigate('MovieDetail', { movie })
    }

    render() {
        if(this.props.loading) {
            return (
                <View style={{flex : 1, padding : 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, marginBottom : 10}}>
                <View style={{
                    margin:10,
                    alignItems:'center'
                }}>
                    <Text style={{fontSize: 30, fontWeight:'bold', color: '#009900'}}>
                        NOW PLAYING
                    </Text>
                </View>
                <FlatList
                    data={this.props.movies.results}
                    renderItem={({item}) => {
                    return (<MovieCard
                        key={item.id}
                        movie={item}
                        showDetail={ this.showDetail }
                    ></MovieCard>)}
                    }
                    keyExtractor={({id}) => id}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading : state.movies.loading,
        movies : state.movies.movies,
        error : state.movies.error
    }
}
  
const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => {dispatch(fetchMovies())}
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  