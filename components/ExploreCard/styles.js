import styled, { css } from "@emotion/native";
import colors from "../../config/colors";

export const card = (cardWidth, isEven) => css`
  display: flex;
  flex: 1 0 ${cardWidth};
  max-width: ${cardWidth};
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  margin: 10px;
  height: 300px;
  border-radius: 25px;
  margin-top: ${isEven ? "0" : "-150px"};
`;

export const image = css`
  display: flex;
  align-self: stretch;
  height: 100px;
  margin: 10px;
  border-radius: 15px;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 10px;
`;
export const title = css`
  font-weight: 600;
  color: ${colors.richBlack};
  font-size: 14px;
`;
export const description = css`
  font-size: 12px;
  color: ${colors.quickSilver};
  margin-top: 10px;
`;
export const button = css`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background: ${colors.lavendarBlush};
  color: ${colors.hotPink};
  align-self: flex-end;
  padding: ;
  justify-content: center;
  align-items: center;
`;
