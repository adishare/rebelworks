import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchMovies } from '../stores/actions/movieActions'
import MovieCard from '../components/MovieCard'

export class Movies extends Component {

    state = {
        page : 1
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    showDetail = (movie) => {
        this.props.navigation.navigate('MovieDetail', { movie })
    }

    loadMoreMovies = () => {
        this.setState({
            page : this.state.page += 1
        })
        this.props.fetchMovies(this.state.page)
    }

    render() {

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

                {this.props.loading && ( 
                    <View style={{flex : 1, padding : 20}}>
                        <ActivityIndicator/>
                    </View>
                )}

                <FlatList
                    data={this.props.movies}
                    renderItem={({item}) => {
                    return (<MovieCard
                        key={item.id}
                        movie={item}
                        showDetail={ this.showDetail }
                    ></MovieCard>)}
                    }
                    keyExtractor={({id}) => id}
                    onEndReached={ () => this.loadMoreMovies() }
                    onEndReachedThreshold={0.01}
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
    fetchMovies: (payload) => {dispatch(fetchMovies(payload))}
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  