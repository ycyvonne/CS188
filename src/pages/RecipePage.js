import React, { Component } from 'react'
import { css } from 'react-emotion'

import LeftArrow from '../components/LeftArrow'
import colors from '../global/colors'
import margins from '../global/margins'
import Header from '../components/Header'

class RecipePage extends React.Component {
  state = {
    recipeInfo: null,
  }

  async componentDidMount() {
    const res = await fetch(
      `https://food-api-proxy.herokuapp.com/get-recipe-info?q=${
        this.props.recipeID
      }`
    )
    const data = await res.json()
    this.setState({ recipeInfo: data })
  }

  render() {
    return (
      <>
        <div
          className={css`
            position: relative;
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url('${
                !!this.state.recipeInfo ? this.state.recipeInfo.image : ''
              }');
            background-size: cover;
            /* background-attachment: fixed; */
            /* background-position: center; */
            /* background-repeat: no-repeat; */
            width: 100%;
            height: 250px;
          `}
        >
          <LeftArrow
            to="/"
            color={colors.white}
            style={css`
              position: absolute;
              top: ${margins.medium};
              left: ${margins.small};
            `}
          />
          <Header
            style={css`
              position: absolute;
              bottom: ${margins.small};
              left: ${margins.small};
              color: ${colors.white};
              margin: 0;
            `}
          >
            {!!this.state.recipeInfo && this.state.recipeInfo.title}
          </Header>
        </div>
        <div
          className={css`
            padding: 1rem;
          `}
        >
          {!!this.state.recipeInfo && (
            <p
              dangerouslySetInnerHTML={{
                __html: this.state.recipeInfo.summary,
              }}
            />
          )}
          <div>
            {!!this.state.recipeInfo &&
              this.state.recipeInfo.instructions.map((section, i) => (
                <section key={i}>
                  <h3>{section.name}</h3>
                  {section.steps.length > 0 &&
                    section.steps.map(step => (
                      <div key={step.number}>
                        <div
                          className={css`
                            font-weight: bold;
                          `}
                        >
                          {step.number}
                        </div>
                        <p>{step.step}</p>
                      </div>
                    ))}
                </section>
              ))}
          </div>
        </div>
      </>
    )
  }
}

export default RecipePage
