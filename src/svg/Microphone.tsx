import { SVGProps } from "react";

const Microphone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.708 6.375c.392 0 .709.317.709.708v.709a4.25 4.25 0 1 0 8.5 0v-.709a.708.708 0 1 1 1.416 0v.709a5.668 5.668 0 0 1-4.958 5.623v2.168H8.5A.708.708 0 0 1 8.5 17H2.833a.708.708 0 1 1 0-1.417h2.125v-2.168A5.668 5.668 0 0 1 0 7.792v-.709c0-.39.317-.708.708-.708Z"
      fill="#A9ABAD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.083 7.792V2.833a1.417 1.417 0 0 0-2.833 0v4.959a1.417 1.417 0 0 0 2.833 0ZM5.666 0a2.833 2.833 0 0 0-2.833 2.833v4.959a2.833 2.833 0 1 0 5.667 0V2.833A2.833 2.833 0 0 0 5.666 0Z"
      fill="#A9ABAD"
    />
  </svg>
);

export default Microphone;
