export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100" fill="currentColor" height="28" width="auto">
      <g transform="translate(10, 10)">
        <path d="M40 0 v80" stroke="currentColor" strokeWidth="8" />
        <path d="M0 15 l40 20 l40 -20 m-80 50 l40 -20 l40 20" stroke="currentColor" strokeWidth="8" fill="none" />
        <path d="M0 15 v10 l40 20 l40 -20 v-10 l-40 20 z" />
        <path d="M0 65 v10 l40 -20 l40 20 v-10 l-40 -20 z" />
      </g>
      <text x="120" y="45" fontFamily="sans-serif" fontSize="34" fontWeight="bold" letterSpacing="1">BEK</text>
      <text x="120" y="85" fontFamily="sans-serif" fontSize="34" fontWeight="bold" letterSpacing="1">MUSABAEV</text>
    </svg>
  );
}
