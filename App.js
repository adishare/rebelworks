import React, {Component} from "react";
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from "react-navigation";
import store from './stores/store';
import {Provider} from "react-redux";
import Movies from "./screens/Movies";
import MovieDetail from "./screens/MovieDetail.js";
import About from "./screens/About";

console.disableYellowBox = true;

const MovieNavigator = createStackNavigator({
    Movies : {
        screen : Movies,
        navigationOptions : () => ({
            header : null
        })
    },
    MovieDetail : {
        screen : MovieDetail
    }
}, {
    initialRouteName : 'Movies'
})

const AppNavigator = createBottomTabNavigator({
    Movies : {
        screen : MovieNavigator
    },
    About
}, {
    initialRouteName : 'Movies'
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}