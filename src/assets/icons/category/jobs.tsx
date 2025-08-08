import { type SVGProps } from "react";
export const JobsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      stroke="#4B4646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.077 5.8v-.96c0-2.124 0-3.84 3.938-3.84h1.97c3.938 0 3.938 1.716 3.938 3.84v.96m-2.462 9.624V14.2c0-1.2 0-1.2-1.23-1.2h-2.462c-1.23 0-1.23 0-1.23 1.2v1.236m4.922-.012c0 1.308-.012 2.376-2.461 2.376-2.437 0-2.461-1.056-2.461-2.364m4.922-.012a20.587 20.587 0 0 0 9.415-3.624m-14.337 3.636a20.355 20.355 0 0 1-9.083-3.312M8.077 25h9.846c4.947 0 5.833-1.932 6.092-4.284l.922-9.6c.333-2.928-.529-5.316-5.784-5.316H6.847C1.592 5.8.73 8.188 1.063 11.116l.923 9.6C2.244 23.068 3.13 25 8.077 25Z"
    />
  </svg>
);
