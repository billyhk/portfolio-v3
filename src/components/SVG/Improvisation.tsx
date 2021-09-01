import * as React from "react";

export const Improvisation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={384}
    height={289}
    viewBox="0 0 384 289"

    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter
        x="-1.3%"
        y="-1.3%"
        width="102.6%"
        height="102.7%"
        filterUnits="objectBoundingBox"
        id="prefix__1"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          in="shadowOffsetOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter
        x="-.3%"
        y="-.3%"
        width="100.6%"
        height="100.6%"
        filterUnits="objectBoundingBox"
        id="prefix__2"
      >
        <feGaussianBlur in="SourceGraphic" />
      </filter>
      <filter
        x="-.1%"
        y="-.1%"
        width="100.1%"
        height="100.5%"
        filterUnits="objectBoundingBox"
        id="prefix__3"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          in="shadowOffsetOuter1"
        />
      </filter>
      <path
        d="M178.673 98.142C129.336 101.685 69.778 159.33 0 271.075l89.337-49.666 158.366-36.8 135.93 102.145C296.33 157.47 228.01 94.598 178.673 98.142z"
        id="prefix__4"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g
        filter="url(#prefix__1)"
        transform="translate(105 1)"
        fill="#D8D8D8"
        stroke="#960000"
      >
        <ellipse filter="url(#prefix__2)" cx={87} cy={83.5} rx={87} ry={83.5} />
      </g>
      <g transform="translate(0 1)">
        <use fill="#000" filter="url(#prefix__3)" xlinkHref="#prefix__4" />
        <use fillOpacity={0.82} fill="#F8F8F8" xlinkHref="#prefix__4" />
      </g>
    </g>
  </svg>
);
