import styled, { css } from "styled-components";
import dollarLogo from "../../images/icon-dollar.svg";
import personLogo from "../../images/icon-person.svg";
interface CalculatorButtonProps {
  active?: boolean;
}
export const CalculatorWrapper = styled.div`
  width: 60%;
  background-color: hsl(0, 0%, 100%);
  margin-top: 80px;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 65%;
    gap: 40px;
    flex-direction: column;
  }
  @media (max-width: 426px) {
    width: 85%;
    margin-top: 40px;
  }
`;
export const CalculatorInputsWrapper = styled.div`
  width: 48%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const CalculatorInput = styled.input`
  margin-top: 10px;
  background: url(${dollarLogo}) no-repeat scroll 20px hsl(189, 41%, 97%);
  border: none;

  padding: 7px 20px 7px 40px;
  border-radius: 4px;
  width: 100%;
  outline-color: hsl(172, 67%, 45%);
  box-sizing: border-box;
  &::placeholder {
    color: hsl(185, 41%, 84%);
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputTitle = styled.p`
  margin: 0;
  color: hsl(186, 14%, 43%);
`;
export const InputTitleTip = styled(InputTitle)`
  margin-top: 40px;
`;
export const CalculatorTipList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 426px) {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
  }
`;
export const CustomTipInput = styled.input`
  background-color: hsl(189, 41%, 97%);
  border: none;
  border-radius: 5px;
  outline-color: hsl(172, 67%, 45%);
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: hsl(185, 41%, 84%);
    text-align: center;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const CalculatorButton = styled.button<CalculatorButtonProps>`
  background-color: ${({ disabled }) =>
    disabled ? "hsl(186, 14%, 43%)" : "hsl(183, 100%, 15%)"};
  color: hsl(0, 0%, 100%);
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: none;
  border-radius: 5px;
  padding: 5px;
  transition: background-color 0.3s, color 0.3s;
  /* hsl(0, 0%, 50%) */
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "" : "hsl(173, 61%, 77%)"};
    color: ${({ disabled }) => (disabled ? "" : "hsl(183, 100%, 15%)")};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: hsl(172, 67%, 45%);
      color: hsl(183, 100%, 15%);
    `}
`;

export const CalculatorPersonInput = styled(CalculatorInput)`
  background: url(${personLogo}) no-repeat scroll 20px hsl(189, 41%, 97%);
`;
export const TitlePersonInput = styled(InputTitle)`
  margin-top: 40px;
`;
export const CalculatorOutputWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px 30px;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(183, 100%, 15%);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
  }
`;
export const CalculatorOutputTitle = styled.p`
  margin: 0;
  color: hsl(0, 0%, 100%);
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
export const CalculatorOutputDescription = styled.p`
  margin: 0;
  color: hsl(184, 14%, 56%);
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
export const CalculatorOutputValue = styled.p`
  margin: 0;
  color: hsl(172, 67%, 45%);
  font-size: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const CalculatorOutputItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CalculatorOutputButton = styled.button`
  font-size: 20px;
  color: hsl(183, 100%, 15%);
  background-color: ${({ disabled }) =>
    disabled ? "hsl(186, 14%, 43%)" : "hsl(172, 67%, 45%)"};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background-color 0.3s;
  &:hover {
    ${({ disabled }) =>
      disabled ? "" : "background-color: hsl(173, 61%, 77%);"};
  }
`;
