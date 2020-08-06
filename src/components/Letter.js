import React from "react";

const MARKS = {
  "left-dot": <circle cx="5" cy="5" r="3.5" fill="black" stroke-width="0" />,
  "left-ascender": <line x1="5" x2="5" y1="5" y2="30" />,
  "left-side-top": <line x1="5" x2="5" y1="30" y2="50" />,
  "left-side": <line x1="5" x2="5" y1="30" y2="70" />,
  "left-side-bottom": <line x1="5" x2="5" y1="50" y2="70" />,
  "left-descender": <line x1="5" x2="5" y1="70" y2="95" />,
  "right-dot": <circle cx="45" cy="5" r="3.5" fill="black" stroke-width="0" />,
  "right-ascender": <line x1="45" x2="45" y1="5" y2="30" />,
  "right-side-top": <line x1="45" x2="45" y1="30" y2="50" />,
  "right-side": <line x1="45" x2="45" y1="30" y2="70" />,
  "right-side-bottom": <line x1="45" x2="45" y1="50" y2="70" />,
  "right-descender": <line x1="45" x2="45" y1="70" y2="95" />,
  "top-gap": <line x1="5" x2="30" y1="30" y2="30" />,
  top: <line x1="5" x2="45" y1="30" y2="30" />,
  middle: <line x1="5" x2="45" y1="50" y2="50" />,
  bottom: <line x1="5" x2="45" y1="70" y2="70" />,
  "bottom-gap": <line x1="5" x2="30" y1="70" y2="70" />,
  "top-left-bottom-middle": <line x1="5" x2="25" y1="30" y2="70" />,
  "top-left-bottom-right": <line x1="5" x2="45" y1="30" y2="70" />,
  "top-right-bottom-middle": <line x1="45" x2="25" y1="30" y2="70" />,
  "top-right-bottom-left": <line x1="45" x2="5" y1="30" y2="70" />,
  "middle-left-top-right": <line x1="5" x2="45" y1="50" y2="30" />,
  "middle-left-bottom-right": <line x1="5" x2="45" y1="50" y2="70" />,

  "top-circle": <path d="M 5 50 A 20 20, 0, 0, 1, 45 50" fill="transparent" />,
  "bottom-circle": (
    <path d="M 5 50 A 20 20, 0, 0, 0, 45 50" fill="transparent" />
  ),
  "top-circle-gap": (
    <path d="M 5 50 A 20 20, 0, 0, 1, 40 36" fill="transparent" />
  ),
  "bottom-circle-gap": (
    <path d="M 5 50 A 20 20, 0, 0, 0, 40 64" fill="transparent" />
  ),
  "descender-circle": (
    <path d="M 45 70 L 45 75 A 20 20, 0, 0, 1, 5 75" fill="transparent" />
  ),
  s: (
    <path
      d="M 40 38 C 40 40, 38 31, 25 30 S 5 50, 25 50 S 45 70, 25 70 C 12 69, 10 60, 10 62"
      stroke="black"
      fill="transparent"
    />
  ),
};

export const FORMS = {
  a: ["top-circle", "bottom-circle", "right-side"],
  b: ["left-ascender", "left-side", "top-circle", "bottom-circle"],
  c: ["top-circle-gap", "bottom-circle-gap"],
  d: ["right-ascender", "right-side", "top-circle", "bottom-circle"],
  e: ["middle", "top-circle", "bottom-circle-gap"],
  f: ["top-circle-gap", "left-side-bottom", "left-descender", "bottom-gap"],
  g: ["top-circle", "bottom-circle", "right-side", "descender-circle"],
  h: ["left-ascender", "left-side", "top-circle", "right-side-bottom"],
  i: ["left-side", "left-dot"],
  j: ["right-side", "descender-circle", "right-dot"],
  k: [
    "left-ascender",
    "left-side",
    "middle-left-top-right",
    "middle-left-bottom-right",
  ],
  l: ["left-ascender", "left-side-top", "bottom-circle-gap"],
  m: [
    ["left-side", "top-circle", "right-side-bottom"],
    ["top-circle", "right-side-bottom"],
  ],
  n: ["left-side", "top-circle", "right-side-bottom"],
  o: ["top-circle", "bottom-circle"],
  p: ["left-side", "left-descender", "top-circle", "bottom-circle"],
  q: ["top-circle", "bottom-circle", "right-side", "right-descender"],
  r: ["left-side", "top-circle-gap"],
  s: ["s"],
  t: ["left-ascender", "left-side-top", "bottom-circle-gap", "top-gap"],
  u: ["left-side-top", "bottom-circle", "right-side"],
  v: ["top-left-bottom-middle", "top-right-bottom-middle"],
  w: [
    ["left-side-top", "bottom-circle", "right-side-top"],
    ["bottom-circle", "right-side"],
  ],
  x: ["top-left-bottom-right", "top-right-bottom-left"],
  y: ["left-side-top", "bottom-circle", "right-side", "descender-circle"],
  z: ["top", "top-right-bottom-left", "bottom"],
};

export default function Letter(props) {
  const hasDoubleMarks = Array.isArray((props.marks || [])[0]);
  const defaultSize = hasDoubleMarks ? "wide" : "normal";
  const { size = defaultSize, marks } = props;
  const width = size === "narrow" ? 10 : size === "wide" ? 90 : 50;

  const normalMarks = hasDoubleMarks ? marks[0] : marks || [];
  const wideMarks = hasDoubleMarks ? marks[1] : [];

  return (
    <svg
      width={width}
      height={100}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "24px 2px" }}
    >
      {size !== "narrow" && (
        <circle
          cx="25"
          cy="50"
          r="20"
          stroke="#e7e7e7"
          fill="transparent"
          stroke-width="5"
        />
      )}

      {size === "wide" && (
        <circle
          cx="65"
          cy="50"
          r="20"
          stroke="#e7e7e7"
          fill="transparent"
          stroke-width="5"
        />
      )}

      <circle cx="5" cy="5" r="3.5" fill="#e7e7e7" />
      <circle cx="5" cy="30" r="3.5" fill="#d7d7d7" />
      <circle cx="5" cy="50" r="3.5" fill="#c7c7c7" />
      <circle cx="5" cy="70" r="3.5" fill="#d7d7d7" />
      <circle cx="5" cy="95" r="3.5" fill="#e7e7e7" />

      {size !== "narrow" && (
        <>
          <circle cx="45" cy="5" r="3.5" fill="#e7e7e7" />
          <circle cx="45" cy="30" r="3.5" fill="#d7d7d7" />
          <circle cx="45" cy="50" r="3.5" fill="#c7c7c7" />
          <circle cx="45" cy="70" r="3.5" fill="#d7d7d7" />
          <circle cx="45" cy="95" r="3.5" fill="#e7e7e7" />
        </>
      )}

      {size === "wide" && (
        <>
          <circle cx="85" cy="5" r="3.5" fill="#e7e7e7" />
          <circle cx="85" cy="30" r="3.5" fill="#d7d7d7" />
          <circle cx="85" cy="50" r="3.5" fill="#c7c7c7" />
          <circle cx="85" cy="70" r="3.5" fill="#d7d7d7" />
          <circle cx="85" cy="95" r="3.5" fill="#e7e7e7" />
        </>
      )}

      <g stroke="black" stroke-width="5" stroke-linecap="round">
        {normalMarks.map((name) => MARKS[name])}
      </g>

      {size === "wide" && (
        <g
          stroke="black"
          stroke-width="5"
          stroke-linecap="round"
          style={{ transform: "translateX(40px)" }}
        >
          {wideMarks.map((name) => MARKS[name])}
        </g>
      )}
    </svg>
  );
}
