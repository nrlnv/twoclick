import { type SVGProps } from "react";
export const CareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m10.08 12.148 11.5-10.616a2.06 2.06 0 0 1 1.027-.499c.387-.069.789-.03 1.153.111.365.139.678.374.899.676.22.303.34.658.341 1.023v4.006a1.72 1.72 0 0 1-.148.71c-.1.224-.247.429-.432.601L15 16.69m.08-9.157 5 4.615M1.582 18.002A1.777 1.777 0 0 0 1 19.303c0 .488.21.955.582 1.301l4.18 3.86c.374.343.88.536 1.41.536.528 0 1.034-.193 1.41-.537L16 17.613l-7-6.462-7.42 6.85Z"
    />
  </svg>
);
