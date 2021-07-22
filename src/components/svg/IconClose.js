import * as React from "react";

function SvgIconClose(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFF"
          stroke="#2C2830"
          strokeWidth={1.5}
          d="M.75.75h30.5v30.5H.75z"
        />
        <g fill="#2C2830">
          <path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z" />
          <path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgIconClose;
