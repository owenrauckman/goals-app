import styled, { css } from "@emotion/native";
import colors from "../../config/colors";

export const searchBar = barWidth => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  margin: 0px 10px 20px 10px;
  padding: 18px;
  height: 54px;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  width: ${barWidth};
`;

export const searchBarContainer = css`
  display: flex;
  flex-direction: row;
`;

export const magnify = css`
  margin-right: 5px;
`;

export const input = css`
  display: flex;
  font-weight: 600;
  font-size: 16px;
`;

export const dateContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const chevron = css`
  margin-right: 10px;
`;

export const date = css`
  font-weight: 600;
`;
