import React, { Component } from 'react'
import { css } from 'react-emotion'

import LeftArrow from '../components/LeftArrow'
import colors from '../global/colors'
import margins from '../global/margins'
import Header from '../components/Header'

class RecipePage extends Component {
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
              url('https://cdn0.vox-cdn.com/thumbor/IL4ThHk4KP1ft0P18EnXxngakdI=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn0.vox-cdn.com/uploads/chorus_image/image/54014619/shrek.0.jpg');
            background-size: cover;
            /* background-attachment: fixed; */
            /* background-position: center; */
            /* background-repeat: no-repeat; */
            width: 100%;
            height: 250px;
          `}
        >
          <LeftArrow
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
            Fried Chicken
          </Header>
        </div>
        <div>
          {!!this.props.steps &&
            this.props.steps.map((step, i) => (
              <div>
                <h3>{i}</h3>
                <section>{step}</section>
              </div>
            ))}
        </div>
      </>
    )
  }
}

export default RecipePage
