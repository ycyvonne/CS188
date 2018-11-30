import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { css } from 'react-emotion'

import colors from '../global/colors'
import borderRadii from '../global/borderRadii'

import Card from './Card';
import x from '../assets/icons/x2.svg'

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
      // The active selection's index
      activeSuggestion: 0,
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

  onClick = e => {
    this.props.onEnter(e.currentTarget.innerText);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
        this.props.onEnter(this.state.userInput);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
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
            padding: 8px 0;
            border-radius: ${borderRadii.small};
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
                  onClick={onClick}
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
            onKeyDown={onKeyDown}
            value={userInput}

            autoFocus={this.props.autoFocus}
            placeholder={this.props.placeholder}
            
          />
          {this.state.userInput != '' && <img 
            src={x}
            alt="clear search input"
            onClick={() => {this.setState({userInput: ''})}}
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
