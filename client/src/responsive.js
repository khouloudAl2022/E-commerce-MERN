import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 300px) and (max-width: 1280px) {
      ${props}
    }
    
  `;
};
