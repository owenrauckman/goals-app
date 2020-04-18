import styled, { css } from "@emotion/native";
import colors from "../../config/colors";

export const card = isLast => css`
  background: white;
  padding: 20px;
  margin: 10px 0px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(201, 201, 201, 0.5);
  margin-bottom: ${isLast ? "30px" : "10px"};
`;

export const day = css`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.richBlack};
  text-align: right;
  padding: 10px 10px 30px 0;
`;

export const goalContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const checkmarkContainer = completed => css`
  flex: 1;
  max-width: ${completed ? "30px" : "0px"};
  padding-right: ${completed ? "24px" : "0px"};
`;

export const verticalDotsContainer = css`
  flex: 1;
  max-width: 24px;
  padding-left: 12px;
`;

export const goalTodoContainer = completed => css`
  flex: 1;
  background: ${completed ? colors.brilliantAzure : colors.white};
  padding: 30px 30px 15px 30px;
  border-radius: 100px;
  box-shadow: ${completed
    ? "0px 18px 10px rgba(0, 0, 0, 0.10)"
    : " 0px 18px 10px rgba(0, 0, 0, 0.05)"};
`;

export const goalTitle = completed => css`
  color: ${completed ? colors.white : colors.richBlack};
  font-weight: 700;
  font-size: 14px;
`;

export const goalMessage = completed => css`
  color: ${completed ? colors.white : colors.richBlack};
  font-weight: 400;
  font-size: 10px;
  align-self: flex-end;
`;
