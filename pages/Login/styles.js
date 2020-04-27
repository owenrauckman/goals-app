import styled, { css } from "@emotion/native";
import colors from "../../config/colors";

export const container = css`
  padding: 20px;
`;

export const imageContainer = css`
  background: white;
  padding: 20px;
  border-radius: 200px;
  height: 200px;
  width: 200px;
  box-shadow: 0px 20px 20px rgba(201, 201, 201, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

export const updatePhotoContainer = css`
  background: ${colors.cornFlowerBlue};
  height: 40px;
  width: 40px;
  border-radius: 40px;
  position: absolute;
  top: 20px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const image = css`
  height: 180px;
  width: 180px;
  border-radius: 180px;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 10px;
`;

export const fullWidth = cardWidth => css`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${cardWidth};
  background: ${colors.white};
  padding: 30px;
  border-radius: 100px;
  box-shadow: 0px 18px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

export const halfContainer = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const halfWidth = (cardWidth, isLeft, isBlue) => css`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: ${isBlue ? "center" : "space-between"};
  align-items: center;
  width: ${cardWidth};
  background: ${isBlue ? colors.brilliantAzure : colors.white};
  padding: 30px;
  margin-right: ${isLeft ? "10px" : 0};
  margin-left: ${isLeft ? 0 : "10px"};
  border-radius: 100px;
  box-shadow: ${isBlue
    ? "0px 18px 10px rgba(0, 0, 0, 0.10)"
    : " 0px 18px 10px rgba(0, 0, 0, 0.05)"};
  margin-bottom: 20px;
`;

export const allHabitsText = css`
  color: ${colors.white};
  text-align: center;
  font-weight: 600;
`;

export const formText = css`
  font-weight: 600;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 0 40px 0;
`;

export const button = hasBackground => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: ${hasBackground ? colors.lavendarBlush : "transparent"};
  border-radius: 50px;
  margin-left: 10px;
`;

export const buttonText = css`
  color: ${colors.hotPink};
  font-weight: 600;
`;
