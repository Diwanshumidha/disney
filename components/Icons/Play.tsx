import * as React from "react";
import { SVGProps } from "react";
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-play"
    {...props}
  >
    <path d="m5 3 14 9-14 9V3z" />
  </svg>
);
export default PlayIcon;
