import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { css } from 'react-emotion'

import colors from '../global/colors'
import borderRadii from '../global/borderRadii'

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

    this.setState({
      userInput: userInput
    });
    this.getResults(userInput).then(ingredients => {
      var filteredSuggestions = ingredients.map(a => a.name);
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
            background: grey;
            border-radius: ${borderRadii.small};
            background: #f5f5f5;
          `}>
            {filteredSuggestions.slice(0, this.props.maxSuggestions).map((suggestion, index) => {
              let className = ' ';

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = " suggestion-active";
              }

              return (
                <li
                    className={css`
                        padding: 5px 8px;
                        font-size: 16px;
                        font-weight: bold;
                        text-transform: lowercase;
                        &:hover {
                            cursor: pointer;
                            background: rgba(0,0,0,0.1);
                        }
                    ` + className}
                    key={suggestion} 
                    onClick={onClick}>
                  {suggestion}
                </li>
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
        <input
          className={css`
            background: ${colors.lightGray};
            border-radius: ${borderRadii.small};
            border: none;
            width: 100%;
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
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
