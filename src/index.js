import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, navigate } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import LoginPage from './pages/LoginPage';
import IngredientsPage from './pages/IngredientsPage/container'
import IngredientSearch from './pages/IngredientSearch'
import IngredientSearchResults from './pages/IngredientSearchResults/container'
import RecipeCustomize from './pages/RecipeCustomize'
import RecipeSearchResults from './pages/RecipeSearchResults/container'
import RecipePage from './pages/RecipePage'

import firebase from 'firebase';
import base, { facebookProvider } from './base'

import ingredientsList from './reducers'
import * as _ from 'lodash'

const store = createStore(
  ingredientsList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      user: null,
      ingredients: []
    };
  }

  addIngredient = (ingredient) => {
    this.setState({
      ingredients: this.state.ingredients.concat([ingredient])
    });
  }

  removeIngredients = (ingredientsListToRemove) => {
    var ingredientList = this.state.ingredients;
    this.setState({
      ingredients: ingredientList.filter(ingredient => !_.some(ingredientsListToRemove, ingredient))
    });
  }

  login = () => {
    firebase.auth().signInWithRedirect(facebookProvider);
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null }) 
    }).catch(error => {
      console.log('logout error:', error);
    });
  }

  componentDidMount() {
    this.ref = base.syncState('ingredients', {
      context: this,
      state: 'ingredients',
      asArray: true,
    });

    if (!this.state.user) {
      firebase.auth().getRedirectResult().then(result => {
        if (result.credential) {
          var token = result.credential.accessToken;
        }
        var user = result.user;
        this.setState({user: user});
        console.log('user', user)
        console.log('state', this.state)
        if (user) {
          navigate("/ingredients");
        }
      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log('error', errorMessage)
      });
    }
    else {
      navigate("/ingredients");
    }
  }

  render() {
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          background: black;
          height: 100vh;
        `}
      >
        <div
          className={css`
            width: 420px;
            background: white;
            height: 100%;
            > div {
              height: 100%;
              overflow: scroll;
            }
          `}
        >
          <Router>
            <LoginPage
              path="/"
              login={this.login}
              default/>
            <IngredientsPage path="/ingredients"
              ingredients={this.state.ingredients}
              removeIngredients={this.removeIngredients}
            />
            <IngredientSearch path="ingredient-search" />
            <IngredientSearchResults path="ingredient-search/:ingredient"
              addIngredient={this.addIngredient}
            />
            <RecipeSearchResults path="recipe-search-results"
              ingredients={this.state.ingredients}
            />
            <RecipePage path="recipe/:recipeID" />
          </Router>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
