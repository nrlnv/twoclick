import { type SVGProps } from "react";
export const JobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      stroke="#4B4646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 1.462v6.923c0 .49.19.959.527 1.305s.795.54 1.273.54h6.75M5.201 13.006h9M5.5 19.462h9m4.5-8.467v11.236c0 .734-.285 1.439-.79 1.958A2.666 2.666 0 0 1 16.3 25H3.7a2.666 2.666 0 0 1-1.91-.811A2.806 2.806 0 0 1 1 22.23V3.769c0-.734.284-1.439.79-1.958A2.666 2.666 0 0 1 3.7 1h5.555c.477 0 .935.195 1.272.54l7.946 8.15c.337.346.527.816.527 1.305Z"
    />
  </svg>
);
