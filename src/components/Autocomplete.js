import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { css } from 'react-emotion'

import colors from '../global/colors'
import borderRadii from '../global/borderRadii'

import Card from './Card';
import x from '../assets/icons/x2.svg'

import * as _ from 'lodash';

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  async getResults(searchQuery) {
    const res = await fetch(
      `https://food-api-proxy.herokuapp.com/ingredient-search?q=${
        searchQuery
      }`
    )
    return await res.json()
  }

  onChange = e => {    
    const userInput = e.currentTarget.value;

    this.setState({ userInput: userInput });

    this.getResults(userInput).then(ingredients => {
      var filteredSuggestions = ingredients;
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true
      });
      this.props.onChange(userInput);
    })
    .catch(err => {
      console.log('error in fetching ingredients', err);
    });
  };

  onClick = (e, index) => {
    var currentSuggestion = this.state.filteredSuggestions[index];
    if (!_.some(this.props.selections, currentSuggestion)) {
      this.props.addIngredient(currentSuggestion);
    }
    else {
      this.props.removeIngredient(currentSuggestion);
    }
  };

  render() {
    const {
      onChange,
      onClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions" className={css`
            list-style-type: none;
            margin-top: 0;
            width: 100%;
            padding: 8px 8px;
            border-radius: ${borderRadii.small};
            height: 100%;
            overflow: scroll;
          `}>
            {filteredSuggestions.slice(0, this.props.maxSuggestions).map((suggestion, index) => {
              let className = ' ';

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = " suggestion-active";
              }

              return (
                <Card
                  text={suggestion.name}
                  image={suggestion.image}
                  key={index}
                  onClick={(e) => onClick(e, index)}
                  toggledCheck={_.some(this.props.selections, this.state.filteredSuggestions[index])}
                />
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className={css`
          position: relative;
          width: 100%;
          padding-left: 50px;
        `}>
          <input
            className={css`
              background: ${colors.lightGray};
              border-radius: ${borderRadii.small};
              border: none;
              width: 100%;
              height: 48px;
              padding: 16px 10px;
              margin-bottom: 8px;
              font-size: 14px;
              color: black;
              font-weight: bold;
              :focus {
                  outline: none;
              }
              :placeholder-shown {
                  color: rgba(0, 0, 0, 0.4);
                  font-weight: normal;
              }
            `}
            type="text"
            onChange={onChange}
            value={userInput}

            autoFocus={this.props.autoFocus}
            placeholder={this.props.placeholder}
            
          />
          {this.state.userInput != '' && <img 
            src={x}
            alt="clear search input"
            onClick={() => {this.setState({userInput: '', filteredSuggestions: []})}}
            className={css`
            position: absolute;
            top: 0px;
            right: 0px;
            height: 48px;
            padding: 18px;
            cursor: pointer;
          `}/>}
        </div>
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
