import React from 'react'

function ArrowSvg({theme}) {
  return (
    <svg width="30px" height="30px" viewBox="0 0 120 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="arrow-svg-canvas" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinejoin="round">
        <g id="darkGroup" transform="translate(20.000000, 21.000000)">
          <polygon id="dark2" stroke={theme.darkTriangle} fill={theme.darkTriangle}  strokeWidth="4" points="81 25 31 50 31 -4.5924255e-15"></polygon>
          <polygon id="dark" stroke={theme.darkTriangle} fill={theme.darkTriangle}  strokeWidth="4" points="50 26 -7.10542736e-15 51 0 1"></polygon>
        </g>
        <g id="lightGroup" transform="translate(20.000000, 22.000000)">
          <polygon id="light" fill={theme.lightTriangle} stroke={theme.lightTriangle} strokeWidth="4" points="50 25 -7.10542736e-15 50 0 -4.5924255e-15"></polygon>
        </g>
      </g>
    </svg>
  )
}

export default ArrowSvg
