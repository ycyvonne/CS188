import React from 'react'
import { Link } from '@reach/router'

const LeftArrow = props => (
  <Link to={props.to}>
    <svg
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      className={props.style}
    >
      <g fill={props.color} fillRule="evenodd">
        <path d="M32 14.7v2.6c0 .7-.2 1.4-.7 1.9-.5.5-1 .7-1.8.7H14.2l6.3 6c.6.6.8 1.2.8 2 0 .7-.2 1.3-.8 1.8L19 31.2c-.5.5-1.2.8-2 .8-.7 0-1.4-.3-2-.8L.9 17.8c-.5-.5-.8-1-.8-1.8 0-.7.3-1.3.8-1.9L15 .8c.5-.5 1.2-.8 2-.8.7 0 1.3.3 1.9.8l1.6 1.5c.6.5.8 1.1.8 1.9 0 .7-.2 1.3-.8 1.8l-6.3 6h15.3c.7 0 1.3.3 1.8.8s.7 1.2.7 1.9z" />
        <path d="M32 14.7v2.6c0 .7-.2 1.4-.7 1.9-.5.5-1 .7-1.8.7H14.2l6.3 6c.6.6.8 1.2.8 2 0 .7-.2 1.3-.8 1.8L19 31.2c-.5.5-1.2.8-2 .8-.7 0-1.4-.3-2-.8L.9 17.8c-.5-.5-.8-1-.8-1.8 0-.7.3-1.3.8-1.9L15 .8c.5-.5 1.2-.8 2-.8.7 0 1.3.3 1.9.8l1.6 1.5c.6.5.8 1.1.8 1.9 0 .7-.2 1.3-.8 1.8l-6.3 6h15.3c.7 0 1.3.3 1.8.8s.7 1.2.7 1.9z" />
      </g>
    </svg>
  </Link>
)

export default LeftArrow
