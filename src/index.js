import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, navigate } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import RequireAuth from './pages/RequireAuth'
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
    sessionStorage.setItem("loggingIn", true);
    firebase.auth().signInWithRedirect(facebookProvider);
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null });
      sessionStorage.removeItem('user');
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

    var loggingIn = sessionStorage.getItem("loggingIn");
    
    if (loggingIn || !this.state.user) {
      var sessionUser = sessionStorage.getItem('user');
      sessionStorage.removeItem("loggingIn");

      if (!sessionUser) {
        firebase.auth().getRedirectResult().then(result => {

          // we don't use FB's api for anything else, but keeping this here in case
          // if (result.credential) {
          //   var token = result.credential.accessToken;
          // }
          var user = result.user;
          if (user) {
            this.setState({user: user.providerData[0]});
            sessionStorage.setItem('user', this.state.user);
            navigate("/user/ingredients");
          }
        }).catch(error => {
          var errorMessage = error.message;
          console.log('error in index.js getRedirectResult()', errorMessage)
        });
      }
      else {
        this.setState({user: sessionUser});
        sessionStorage.removeItem("loggingIn");
        navigate("/user/ingredients");
      }
      
    }
    else {
      navigate("/user/ingredients");
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
            <RequireAuth path="user"
              user={this.state.user}
            >
              <IngredientsPage path="ingredients"
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
            </RequireAuth>
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
