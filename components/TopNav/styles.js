import styled, { css } from "@emotion/native";

export const topNav = css`
  padding: 60px 40px 20px 40px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  z-index: +1;
  box-shadow: 0px 18px 10px rgba(0, 0, 0, 0.05);
`;

export const topNavHeading = css`
  font-size: 24px;
  font-weight: bold;
`;
