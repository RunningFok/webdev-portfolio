import { motion } from "framer-motion";
import "./title.scss";

const titleNameVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 6,
      delay: 1,
      duration: 0.3,
    },
  },
};

const titleRoleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.4,
      damping: 8,
      delay: 1.8,
      duration: 0.3,
    },
  },
};
const titlePicVariants = {
  hidden: { opacity: 0, y: "20%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "all",
      // stiffness: 80,
      // mass: 0.4,
      // damping: 8,
      duration: 0.5,
      delay: 2.5,
    },
  },
};

// const MockProfile2 = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.0"
//       viewBox="0 0 1179.000000 1280.000000"
//       preserveAspectRatio="xMidYMid meet"
//       id="profile-pic"
//     >
//       <metadata>
//         Created by potrace 1.15, written by Peter Selinger 2001-2017
//       </metadata>
//       <g
//         transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
//         fill="#202020"
//         stroke="none"
//       >
//         <path d="M5885 12793 c-245 -30 -405 -67 -616 -139 -492 -168 -988 -468 -1193 -721 -135 -168 -238 -478 -391 -1173 -31 -140 -78 -358 -106 -485 -65 -298 -106 -458 -134 -521 l-22 -51 -119 -31 c-240 -63 -433 -87 -803 -102 -723 -29 -960 -69 -1336 -229 -318 -136 -732 -418 -1058 -723 l-68 -63 -15 -85 c-34 -195 -28 -449 16 -660 62 -297 227 -637 432 -888 445 -546 1116 -905 1888 -1011 228 -31 295 -34 310 -16 24 29 5 157 -54 368 -131 463 -165 636 -173 868 -6 158 3 248 33 341 l15 46 86 7 c281 24 504 -58 631 -230 92 -125 131 -224 212 -539 33 -127 69 -255 81 -285 l22 -53 -16 -171 c-22 -219 -22 -404 -1 -477 40 -143 45 -171 46 -275 2 -136 -18 -213 -67 -262 -52 -52 -116 -42 -204 33 -23 20 -41 31 -41 26 0 -5 42 -67 93 -138 152 -211 207 -314 222 -417 9 -59 -7 -170 -51 -352 -79 -328 -69 -425 50 -484 38 -19 58 -39 92 -91 111 -172 205 -377 411 -895 74 -187 175 -421 224 -520 l89 -180 117 -55 c408 -192 667 -419 991 -868 127 -176 186 -290 257 -492 56 -159 93 -234 183 -366 l67 -97 75 -19 c41 -10 136 -43 210 -74 537 -221 585 -237 707 -238 133 -1 166 36 183 210 19 204 76 366 206 584 108 182 301 451 361 504 72 65 91 120 104 300 5 78 17 165 25 194 21 73 72 123 150 145 51 15 62 22 85 59 91 146 126 257 184 577 69 377 110 500 212 633 100 131 167 296 203 504 21 122 53 470 45 484 -3 5 8 46 25 92 119 330 221 780 245 1085 l7 82 56 6 c666 73 1290 316 1802 701 465 350 775 768 887 1198 23 85 27 122 27 236 0 115 -4 150 -27 235 -53 198 -168 392 -336 567 -206 215 -439 373 -744 502 -168 72 -146 83 -202 -100 -159 -518 -339 -822 -604 -1022 -554 -417 -1689 -436 -3346 -55 -232 53 -299 72 -205 59 128 -17 850 -75 1195 -96 522 -30 1125 -39 1431 -20 371 23 584 86 584 174 0 16 -6 26 -14 26 -8 0 -55 21 -105 46 -89 46 -90 46 -114 107 -83 211 -154 516 -391 1692 -229 1137 -310 1493 -446 1955 -101 344 -219 617 -308 713 -68 73 -182 161 -254 196 -133 64 -228 73 -528 46 -436 -39 -810 4 -1127 131 -109 43 -113 44 -220 43 -59 -1 -121 -4 -138 -6z m1775 -283 c31 0 76 -46 104 -106 15 -31 50 -150 77 -263 47 -194 94 -326 126 -352 7 -7 22 -30 32 -53 10 -22 49 -104 86 -181 36 -77 62 -135 57 -130 -6 6 -52 66 -103 135 -51 69 -137 180 -191 248 -55 67 -106 139 -115 160 -10 24 -20 100 -28 222 -10 164 -15 192 -38 243 -14 31 -33 60 -42 63 -8 3 -15 11 -15 16 0 6 7 7 16 4 9 -3 24 -6 34 -6z m-856 -31 c92 -73 160 -390 237 -1109 41 -392 35 -848 -21 -1460 -34 -373 -35 -419 -15 -554 15 -98 73 -289 116 -380 107 -228 343 -357 814 -445 525 -97 687 -137 709 -173 21 -35 -57 -65 -239 -92 -302 -46 -525 -53 -1000 -32 -1043 45 -1383 86 -1613 192 -147 67 -223 145 -270 277 -24 66 -26 85 -26 222 1 220 41 426 204 1040 71 270 85 339 140 692 78 502 129 782 185 1008 67 274 142 472 210 553 27 33 313 213 405 256 68 32 128 34 164 5z m-1224 -68 c158 -11 205 -24 248 -67 33 -33 34 -37 29 -88 -12 -120 -116 -265 -377 -527 -102 -102 -246 -235 -320 -295 -74 -60 -173 -145 -220 -189 -84 -79 -154 -133 -399 -311 -141 -102 -274 -235 -311 -312 -14 -28 -29 -51 -33 -52 -4 0 -21 28 -38 63 -109 234 -5 621 287 1060 124 186 229 314 388 472 140 140 246 223 322 251 41 15 148 14 424 -5z m-1157 -2790 c54 -5 101 -12 104 -14 3 -3 -5 -32 -17 -64 -83 -221 -61 -619 47 -850 15 -32 29 -62 32 -68 2 -5 -20 12 -49 38 -233 210 -657 369 -1145 431 -410 52 -959 45 -1460 -19 -397 -51 -871 -152 -1171 -249 -61 -20 -114 -36 -119 -36 -4 0 44 26 106 58 63 32 211 114 329 182 272 157 438 236 615 295 l140 47 209 -13 c164 -10 250 -10 406 -1 314 19 513 48 1215 181 279 53 473 80 635 89 14 1 69 -3 123 -7z m-3933 -895 c-14 -7 -36 -16 -50 -20 -14 -3 -7 3 15 14 45 22 74 27 35 6z m3699 -1623 c62 -29 143 -122 195 -221 26 -51 50 -92 54 -92 13 0 193 57 437 137 188 62 245 77 310 81 78 4 174 -9 204 -28 28 -17 -8 -38 -202 -114 -106 -42 -220 -94 -255 -117 -59 -38 -91 -74 -78 -86 12 -12 104 -22 208 -22 l107 -1 28 51 27 51 15 -23 c34 -54 107 -115 154 -128 151 -43 293 67 316 243 5 33 11 50 19 48 7 -1 140 -9 295 -17 440 -23 635 -47 723 -90 121 -59 293 -261 319 -373 8 -31 27 -167 45 -302 39 -310 61 -435 112 -635 50 -197 60 -328 33 -420 -23 -80 -87 -146 -164 -169 -75 -22 -226 -20 -391 5 -195 29 -254 29 -282 2 -15 -15 -19 -26 -12 -33 28 -28 311 -118 459 -146 l40 -7 -30 -8 c-16 -4 -74 -15 -128 -23 -239 -39 -421 -123 -932 -431 -480 -289 -648 -371 -885 -432 -300 -77 -488 84 -615 527 -47 166 -68 268 -125 603 -81 469 -125 637 -215 818 -43 85 -111 191 -166 261 -20 24 -24 55 -46 310 -13 155 -29 331 -36 390 l-13 107 44 63 c86 124 196 217 279 238 47 11 105 5 152 -17z m3748 -927 c40 -9 101 -28 135 -43 62 -27 65 -27 288 -28 l225 0 60 -30 c42 -21 71 -45 97 -80 98 -131 94 -271 -17 -629 -61 -195 -83 -298 -91 -421 -7 -99 -8 -101 -62 -190 -71 -116 -127 -188 -189 -246 -94 -89 -169 -110 -266 -78 -156 52 -314 161 -412 284 -80 100 -105 152 -105 222 0 81 -20 164 -95 407 -95 309 -106 362 -111 561 -5 157 -4 172 14 201 22 35 86 70 153 84 62 13 291 5 376 -14z m-382 -2061 c242 -98 367 -286 325 -488 -14 -69 -88 -243 -127 -301 -78 -114 -217 -216 -323 -236 -110 -21 -186 24 -247 147 -112 225 -352 317 -520 201 -51 -35 -97 -102 -118 -170 -12 -42 -52 -127 -192 -415 -59 -121 -124 -181 -214 -198 -63 -12 -368 102 -500 187 -126 81 -207 192 -216 299 -5 48 1 80 36 196 24 76 49 156 58 178 38 103 94 153 207 186 71 21 165 67 371 179 61 33 139 69 175 81 112 35 256 22 343 -31 18 -11 41 -20 53 -20 54 0 186 45 321 111 81 39 184 85 228 101 72 26 90 28 175 25 76 -3 109 -9 165 -32z" />
//       </g>
//     </svg>
//   );
// };

const AdrianMan = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      // width="806.667"
      // height="200"
      version="1.1"
      // viewBox="0 0 806.667 800"
      viewBox="0 0 800 640"
      id="adrianman-pic"
    >
      <g
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        transform="matrix(1.33333 0 0 -1.33333 0 800)"
      >
        <path fill="#445D48" d="M246.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M230.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M214.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M198.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M182.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M166.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M150.5 134h16v16h-16z"></path>
        <path fill="#445D48" d="M246.5 150h16v14h-16z"></path>
        <path fill="#445D48" d="M230.5 150h16v14h-16z"></path>
        <path fill="#445D48" d="M214.5 150h16v14h-16z"></path>
        <path fill="#445D48" d="M198.5 150h16v14h-16z"></path>
        <path fill="#445D48" d="M182.5 150h16v14h-16z"></path>
        <path fill="#445D48" d="M246.5 164h16v16h-16z"></path>
        <path fill="#445D48" d="M230.5 164h16v16h-16z"></path>
        <path fill="#445D48" d="M214.5 164h16v16h-16z"></path>
        <path fill="#445D48" d="M230.5 180h16v14h-16z"></path>
        <path fill="#445D48" d="M214.5 180h16v14h-16z"></path>
        <path fill="#445D48" d="M246.5 180h16v14h-16z"></path>
        <path fill="#445D48" d="M262.5 164h16v16h-16z"></path>
        <path fill="#445D48" d="M230.5 194h16v16h-16z"></path>
        <path fill="#445D48" d="M246.5 194h16v16h-16z"></path>
        <path fill="#445D48" d="M262.5 180h16v14h-16z"></path>
        <path fill="#445D48" d="M278.5 180h16v14h-16z"></path>
        <path fill="#000" d="M278.5 164h16v16h-16z"></path>
        <path fill="#000" d="M294.5 180h16v14h-16z"></path>
        <path fill="#000" d="M310.5 164h16v16h-16z"></path>
        <path fill="#445D48" d="M358.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M374.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M390.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M406.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M422.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M438.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M454.5 134h-16v16h16z"></path>
        <path fill="#445D48" d="M358.5 150h-16v14h16z"></path>
        <path fill="#445D48" d="M374.5 150h-16v14h16z"></path>
        <path fill="#445D48" d="M390.5 150h-16v14h16z"></path>
        <path fill="#445D48" d="M406.5 150h-16v14h16z"></path>
        <path fill="#445D48" d="M422.5 150h-16v14h16z"></path>
        <path fill="#445D48" d="M358.5 164h-16v16h16z"></path>
        <path fill="#445D48" d="M374.5 164h-16v16h16z"></path>
        <path fill="#445D48" d="M390.5 164h-16v16h16z"></path>
        <path fill="#445D48" d="M374.5 180h-16v14h16z"></path>
        <path fill="#445D48" d="M390.5 180h-16v14h16z"></path>
        <path fill="#445D48" d="M358.5 180h-16v14h16z"></path>
        <path fill="#445D48" d="M342.5 164h-16v16h16z"></path>
        <path fill="#445D48" d="M374.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M358.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M342.5 180h-16v14h16z"></path>
        <path fill="#445D48" d="M326.5 180h-16v14h16z"></path>
        <path fill="#445D48" d="M342.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M326.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M310.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M294.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M278.5 194h-16v16h16z"></path>
        <path fill="#445D48" d="M326.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M310.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M294.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M278.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M262.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M358.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M342.5 210h-16v14h16z"></path>
        <path fill="#445D48" d="M326.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M310.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M294.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M278.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M262.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M358.5 224h-16v16h16z"></path>
        <path fill="#445D48" d="M342.5 224h-16v16h16z"></path>
        <path fill="#3876BF" d="M326.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M310.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M294.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M278.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M262.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M358.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M342.5 240h-16v14h16z"></path>
        <path fill="#3876BF" d="M326.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M310.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M294.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M278.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M262.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M358.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M342.5 254h-16v16h16z"></path>
        <path fill="#3876BF" d="M326.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M310.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M294.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M278.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M262.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M358.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M342.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M374.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M390.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M390.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M390.5 300h-16v14h16z"></path>
        <path fill="#3876BF" d="M406.5 300h-16v14h16z"></path>
        <path fill="#3876BF" d="M262.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M278.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M230.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M246.5 284h-16v16h16z"></path>
        <path fill="#3876BF" d="M230.5 270h-16v14h16z"></path>
        <path fill="#3876BF" d="M262.5 300h-16v14h16z"></path>
        <path fill="#3876BF" d="M230.5 300h-16v14h16z"></path>
        <path fill="#3876BF" d="M246.5 300h-16v14h16z"></path>
        <path fill="#3876BF" d="M214.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M214.5 284h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M214.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M198.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M198.5 284h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M198.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M198.5 254h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M182.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M182.5 254h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M214.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M198.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M182.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M214.5 224h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M198.5 224h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M182.5 224h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M422.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M422.5 284h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M406.5 284h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M406.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M422.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M438.5 270h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M422.5 254h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M438.5 254h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M438.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M422.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M406.5 240h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M438.5 224h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M422.5 224h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M406.5 224h-16v16h16z"></path>
        <path fill="#000" d="M294.5 284h-16v16h16z"></path>
        <path fill="#000" d="M310.5 284h-16v16h16z"></path>
        <path fill="#000" d="M326.5 284h-16v16h16z"></path>
        <path fill="#000" d="M342.5 284h-16v16h16z"></path>
        <path fill="#000" d="M358.5 284h-16v16h16z"></path>
        <path fill="#000" d="M278.5 300h-16v14h16z"></path>
        <path fill="#000" d="M374.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M358.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M342.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M326.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M310.5 300h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M294.5 300h-16v14h16z"></path>
        <path fill="#000" d="M438.5 284h-16v16h16z"></path>
        <path fill="#000" d="M438.5 300h-16v14h16z"></path>
        <path fill="#000" d="M454.5 270h-16v14h16z"></path>
        <path fill="#000" d="M454.5 254h-16v16h16z"></path>
        <path fill="#000" d="M454.5 240h-16v14h16z"></path>
        <path fill="#000" d="M454.5 224h-16v16h16z"></path>
        <path fill="#000" d="M438.5 210h-16v14h16z"></path>
        <path fill="#000" d="M422.5 210h-16v14h16z"></path>
        <path fill="#000" d="M406.5 210h-16v14h16z"></path>
        <path fill="#000" d="M374.5 210h-16v14h16z"></path>
        <path fill="#000" d="M374.5 270h-16v14h16z"></path>
        <path fill="#000" d="M374.5 254h-16v16h16z"></path>
        <path fill="#000" d="M374.5 240h-16v14h16z"></path>
        <path fill="#000" d="M374.5 224h-16v16h16z"></path>
        <path fill="#000" d="M406.5 254h-16v16h16z"></path>
        <path fill="#000" d="M390.5 254h-16v16h16z"></path>
        <path fill="#000" d="M246.5 270h-16v14h16z"></path>
        <path fill="#000" d="M390.5 224h-16v16h16z"></path>
        <path fill="#000" d="M422.5 314h-16v16h16z"></path>
        <path fill="#000" d="M406.5 314h-16v16h16z"></path>
        <path fill="#000" d="M390.5 314h-16v16h16z"></path>
        <path fill="#000" d="M390.5 194h-16v16h16z"></path>
        <path fill="#000" d="M342.5 150h-16v14h16z"></path>
        <path fill="#000" d="M342.5 134h-16v16h16z"></path>
        <path fill="#000" d="M342.5 120h-16v14h16z"></path>
        <path fill="#000" d="M278.5 150h-16v14h16z"></path>
        <path fill="#000" d="M278.5 134h-16v16h16z"></path>
        <path fill="#000" d="M278.5 120h-16v14h16z"></path>
        <path fill="#000" d="M358.5 120h-16v14h16z"></path>
        <path fill="#000" d="M374.5 120h-16v14h16z"></path>
        <path fill="#000" d="M390.5 120h-16v14h16z"></path>
        <path fill="#000" d="M406.5 120h-16v14h16z"></path>
        <path fill="#000" d="M422.5 120h-16v14h16z"></path>
        <path fill="#000" d="M438.5 120h-16v14h16z"></path>
        <path fill="#000" d="M454.5 120h-16v14h16z"></path>
        <path fill="#000" d="M166.5 120h-16v14h16z"></path>
        <path fill="#000" d="M182.5 120h-16v14h16z"></path>
        <path fill="#000" d="M198.5 120h-16v14h16z"></path>
        <path fill="#000" d="M214.5 120h-16v14h16z"></path>
        <path fill="#000" d="M230.5 120h-16v14h16z"></path>
        <path fill="#000" d="M246.5 120h-16v14h16z"></path>
        <path fill="#000" d="M262.5 120h-16v14h16z"></path>
        <path fill="#000" d="M470.5 134h-16v16h16z"></path>
        <path fill="#000" d="M470.5 120h-16v14h16z"></path>
        <path fill="#000" d="M150.5 134h-16v16h16z"></path>
        <path fill="#000" d="M150.5 120h-16v14h16z"></path>
        <path fill="#000" d="M438.5 150h-16v14h16z"></path>
        <path fill="#000" d="M454.5 150h-16v14h16z"></path>
        <path fill="#000" d="M166.5 150h-16v14h16z"></path>
        <path fill="#000" d="M182.5 150h-16v14h16z"></path>
        <path fill="#000" d="M406.5 164h-16v16h16z"></path>
        <path fill="#000" d="M422.5 164h-16v16h16z"></path>
        <path fill="#000" d="M406.5 180h-16v14h16z"></path>
        <path fill="#000" d="M198.5 164h16v16h-16z"></path>
        <path fill="#000" d="M182.5 164h16v16h-16z"></path>
        <path fill="#000" d="M198.5 180h16v14h-16z"></path>
        <path fill="#000" d="M214.5 210h-16v14h16z"></path>
        <path fill="#000" d="M198.5 210h-16v14h16z"></path>
        <path fill="#000" d="M182.5 210h-16v14h16z"></path>
        <path fill="#000" d="M230.5 194h-16v16h16z"></path>
        <path fill="#000" d="M166.5 270h-16v14h16z"></path>
        <path fill="#000" d="M166.5 254h-16v16h16z"></path>
        <path fill="#000" d="M166.5 240h-16v14h16z"></path>
        <path fill="#000" d="M166.5 224h-16v16h16z"></path>
        <path fill="#000" d="M182.5 284h-16v16h16z"></path>
        <path fill="#000" d="M182.5 300h-16v14h16z"></path>
        <path fill="#000" d="M390.5 240h-16v14h16z"></path>
        <path fill="#000" d="M214.5 254h-16v16h16z"></path>
        <path fill="#000" d="M246.5 254h-16v16h16z"></path>
        <path fill="#000" d="M230.5 254h-16v16h16z"></path>
        <path fill="#000" d="M214.5 224h16v16h-16z"></path>
        <path fill="#000" d="M214.5 240h16v14h-16z"></path>
        <path fill="#000" d="M230.5 210h16v14h-16z"></path>
        <path fill="#000" d="M230.5 224h16v16h-16z"></path>
        <path fill="#000" d="M230.5 240h16v14h-16z"></path>
        <path fill="#000" d="M262.5 314h-16v16h16z"></path>
        <path fill="#000" d="M358.5 314h-16v16h16z"></path>
        <path fill="#000" d="M342.5 314h-16v16h16z"></path>
        <path fill="#000" d="M326.5 314h-16v16h16z"></path>
        <path fill="#000" d="M310.5 314h-16v16h16z"></path>
        <path fill="#000" d="M246.5 330h-16v14h16z"></path>
        <path fill="#000" d="M230.5 330h-16v14h16z"></path>
        <path fill="#000" d="M246.5 344h-16v16h16z"></path>
        <path fill="#000" d="M230.5 344h-16v16h16z"></path>
        <path fill="#3876BF" d="M246.5 314h-16v16h16z"></path>
        <path fill="#3876BF" d="M230.5 314h-16v16h16z"></path>
        <path fill="#000" d="M214.5 314h-16v16h16z"></path>
        <path fill="#000" d="M198.5 314h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M374.5 314h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M390.5 330h-16v14h16z"></path>
        <path fill="#000" d="M406.5 330h-16v14h16z"></path>
        <path fill="#000" d="M406.5 344h-16v16h16z"></path>
        <path fill="#000" d="M374.5 344h-16v16h16z"></path>
        <path fill="#000" d="M374.5 360h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M374.5 374h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M358.5 374h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M358.5 390h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M358.5 360h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M358.5 344h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M358.5 330h-16v14h16z"></path>
        <path fill="#000" d="M390.5 390h-16v14h16z"></path>
        <path fill="#000" d="M374.5 390h-16v14h16z"></path>
        <path fill="#000" d="M406.5 360h-16v14h16z"></path>
        <path fill="#000" d="M406.5 374h-16v16h16z"></path>
        <path fill="#000" d="M342.5 344h-16v16h16z"></path>
        <path fill="#000" d="M326.5 344h-16v16h16z"></path>
        <path fill="#000" d="M342.5 360h-16v14h16z"></path>
        <path fill="#000" d="M326.5 360h-16v14h16z"></path>
        <path fill="#000" d="M342.5 390h-16v14h16z"></path>
        <path fill="#000" d="M326.5 390h-16v14h16z"></path>
        <path fill="#000" d="M406.5 390h-16v14h16z"></path>
        <path fill="#000" d="M422.5 374h-16v16h16z"></path>
        <path fill="#000" d="M422.5 390h-16v14h16z"></path>
        <path fill="#000" d="M422.5 420h-16v14h16z"></path>
        <path fill="#000" d="M422.5 434h-16v16h16z"></path>
        <path fill="#000" d="M406.5 404h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M310.5 390h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M294.5 374h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M294.5 330h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M294.5 314h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M278.5 314h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M278.5 330h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M262.5 330h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M278.5 344h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M262.5 344h-16v16h16z"></path>
        <path fill="#000" d="M278.5 360h-16v14h16z"></path>
        <path fill="#000" d="M262.5 360h-16v14h16z"></path>
        <path fill="#000" d="M278.5 374h-16v16h16z"></path>
        <path fill="#000" d="M262.5 374h-16v16h16z"></path>
        <path fill="#000" d="M278.5 390h-16v14h16z"></path>
        <path fill="#000" d="M262.5 390h-16v14h16z"></path>
        <path fill="#000" d="M294.5 390h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M246.5 360h-16v14h16z"></path>
        <path fill="#fbdb7b" d="M246.5 374h-16v16h16z"></path>
        <path fill="#fbdb7b" d="M246.5 390h-16v14h16z"></path>
        <path fill="#000" d="M230.5 360h-16v14h16z"></path>
        <path fill="#000" d="M214.5 360h-16v14h16z"></path>
        <path fill="#000" d="M230.5 374h-16v16h16z"></path>
        <path fill="#000" d="M214.5 374h-16v16h16z"></path>
        <path fill="#000" d="M198.5 374h-16v16h16z"></path>
        <path fill="#000" d="M230.5 390h-16v14h16z"></path>
        <path fill="#000" d="M214.5 390h-16v14h16z"></path>
        <path fill="#000" d="M230.5 404h-16v16h16z"></path>
        <path fill="#000" d="M214.5 404h-16v16h16z"></path>
        <path fill="#000" d="M198.5 404h-16v16h16z"></path>
        <path fill="#000" d="M406.5 420h-16v14h16z"></path>
        <path fill="#000" d="M406.5 434h-16v16h16z"></path>
        <path fill="#000" d="M406.5 450h-16v14h16z"></path>
        <path fill="#000" d="M374.5 450h-16v14h16z"></path>
        <path fill="#000" d="M358.5 450h-16v14h16z"></path>
        <path fill="#000" d="M342.5 464h-16v16h16z"></path>
        <path fill="#000" d="M326.5 464h-16v16h16z"></path>
        <path fill="#000" d="M310.5 464h-16v16h16z"></path>
        <path fill="#000" d="M294.5 450h-16v14h16z"></path>
        <path fill="#000" d="M278.5 450h-16v14h16z"></path>
        <path fill="#000" d="M262.5 434h-16v16h16z"></path>
        <path fill="#000" d="M246.5 434h-16v16h16z"></path>
        <path fill="#000" d="M230.5 434h-16v16h16z"></path>
        <path fill="#000" d="M390.5 404h-16v16h16z"></path>
        <path fill="#000" d="M374.5 404h-16v16h16z"></path>
        <path fill="#000" d="M358.5 404h-16v16h16z"></path>
        <path fill="#000" d="M390.5 420h-16v14h16z"></path>
        <path fill="#000" d="M374.5 420h-16v14h16z"></path>
        <path fill="#000" d="M358.5 420h-16v14h16z"></path>
        <path fill="#000" d="M390.5 434h-16v16h16z"></path>
        <path fill="#000" d="M374.5 434h-16v16h16z"></path>
        <path fill="#000" d="M358.5 434h-16v16h16z"></path>
        <path fill="#000" d="M342.5 404h-16v16h16z"></path>
        <path fill="#000" d="M326.5 404h-16v16h16z"></path>
        <path fill="#000" d="M310.5 404h-16v16h16z"></path>
        <path fill="#000" d="M342.5 420h-16v14h16z"></path>
        <path fill="#000" d="M326.5 420h-16v14h16z"></path>
        <path fill="#000" d="M310.5 420h-16v14h16z"></path>
        <path fill="#000" d="M342.5 434h-16v16h16z"></path>
        <path fill="#000" d="M326.5 434h-16v16h16z"></path>
        <path fill="#000" d="M310.5 434h-16v16h16z"></path>
        <path fill="#000" d="M294.5 404h-16v16h16z"></path>
        <path fill="#000" d="M278.5 404h-16v16h16z"></path>
        <path fill="#000" d="M294.5 420h-16v14h16z"></path>
        <path fill="#000" d="M278.5 420h-16v14h16z"></path>
        <path fill="#000" d="M294.5 434h-16v16h16z"></path>
        <path fill="#000" d="M278.5 434h-16v16h16z"></path>
        <path fill="#000" d="M342.5 450h-16v14h16z"></path>
        <path fill="#000" d="M326.5 450h-16v14h16z"></path>
        <path fill="#000" d="M310.5 450h-16v14h16z"></path>
        <path fill="#000" d="M262.5 404h-16v16h16z"></path>
        <path fill="#000" d="M246.5 404h-16v16h16z"></path>
        <path fill="#000" d="M262.5 420h-16v14h16z"></path>
        <path fill="#000" d="M246.5 420h-16v14h16z"></path>
      </g>
    </svg>
  );
};

export default function Title() {
  return (
    <div className="container" id="home">
      <div>
        <motion.div
          id="profile-pic-container"
          variants={titlePicVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          {/* <MockProfile2 /> */}
          <AdrianMan />
        </motion.div>
      </div>

      <motion.div
        variants={titleNameVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        <h1 id="name">adrian fok</h1>
      </motion.div>
      <motion.h2
        id="job"
        variants={titleRoleVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        Software Developer
      </motion.h2>
    </div>
  );
}
