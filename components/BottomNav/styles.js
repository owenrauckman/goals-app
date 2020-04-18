import { css } from "@emotion/native";

export const bottomNav = css`
  border: solid 1px transparent;
  padding: 20px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  box-shadow: 0px -18px 10px rgba(0, 0, 0, 0.05);
`;

export const bottomNavItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const bottomNavText = color => css`
  font-size: 12px;
  padding: 5px 0px 0px 0px;
  color: ${color};
`;
