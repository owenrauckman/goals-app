import styled, { css } from "@emotion/native";

export const card = isLast => css`
  background: white;
  padding: 80px 40px;
  margin: 10px 0px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(201, 201, 201, 0.5);
  margin: ${isLast ? "0 0 198px 0" : 0};
`;
