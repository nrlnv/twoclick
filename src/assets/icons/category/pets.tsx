import { type SVGProps } from "react";
export const PetsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="21px"
    fill="none"
    {...props}
  >
    <path
      stroke="#4B4646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.866 9.464c.337 1.404 1.92 4.302 5.56 4.654M1 19.875V5l2.407 1.966A6.77 6.77 0 0 0 7.691 8.5H13l2.48-5.065A3.422 3.422 0 0 1 18.549 1.5h1.31v4.375L25 7.625v1.75c0 1.933-1.535 3.5-3.428 3.5h-3.43v7c0 1.45-1.15 2.625-2.57 2.625S13 21.325 13 19.875V19c0-.966-.768-1.75-1.714-1.75H7.857c-.947 0-1.714.784-1.714 1.75v.875c0 1.45-1.151 2.625-2.572 2.625C2.151 22.5 1 21.325 1 19.875Z"
    />
  </svg>
);
