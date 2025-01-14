const Gitlab = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="24"
    height="24"
    viewBox="0 0 60 60"
  >
    <path d="M0 0h60v60H0z" style={{ fill: "none" }}></path>
    <clipPath id="a">
      <path d="M0 0h60v60H0z"></path>
    </clipPath>
    <g clip-path="url(#a)">
      <path
        d="m282.83 170.73-.27-.69-26.14-68.22a6.815 6.815 0 0 0-2.69-3.24 7.013 7.013 0 0 0-8 .43 6.996 6.996 0 0 0-2.32 3.52l-17.65 54h-71.47l-17.65-54a6.864 6.864 0 0 0-2.32-3.53 7.013 7.013 0 0 0-8-.43 6.867 6.867 0 0 0-2.69 3.24L97.44 170l-.26.69c-7.708 20.139-1.115 43.113 16.1 56.1l.09.07.24.17 39.82 29.82 19.7 14.91 12 9.06a8.088 8.088 0 0 0 9.76 0l12-9.06 19.7-14.91 40.06-30 .1-.08c17.175-12.988 23.755-35.921 16.08-56.04Z"
        style={{ fillRule: "nonzero" }}
        transform="translate(-29.369 -29.366) scale(.31247)"
      ></path>
    </g>
  </svg>
);
export default Gitlab;
