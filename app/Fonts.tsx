import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* chelsea-market-regular - latin */
      @font-face {
        font-family: "Chelsea Market";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local(""),
          url("/fonts/Chelsea_Market/chelsea-market-v11-latin-regular.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/Chelsea_Market/chelsea-market-v11-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* dm-sans-regular - latin */
      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        src: local(""),
          url("/fonts/DM_Sans/dm-sans-v10-latin-regular.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/DM_Sans/dm-sans-v10-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* dm-sans-500 - latin */
      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 500;
        src: local(""),
          url("/fonts/DM_Sans/dm-sans-v10-latin-500.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/DM_Sans/dm-sans-v10-latin-500.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* dm-sans-700 - latin */
      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 700;
        src: local(""),
          url("/fonts/DM_Sans/dm-sans-v10-latin-700.woff2") format("woff2"), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/DM_Sans/dm-sans-v10-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
    `}
  />
);

export default Fonts;
