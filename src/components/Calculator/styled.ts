import styled from "styled-components";
import dollarLogo from "../../images/icon-dollar.svg";
import personLogo from "../../images/icon-person.svg";
export const CalculatorWrapper = styled.div`
  width: 60%;
  background-color: hsl(0, 0%, 100%);
  margin-top: 80px;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CalculatorInputsWrapper = styled.div`
  width: 48%;
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
export const CalculatorButton = styled.button`
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    transition: 0.3s;
    color: hsl(183, 100%, 15%);
    background-color: hsl(172, 67%, 45%);
  }
`;
export const CalculatorPersonInput = styled(CalculatorInput)`
  background: url(${personLogo}) no-repeat scroll 20px hsl(189, 41%, 97%);
`;
export const TitlePersonInput = styled(InputTitle)`
  margin-top: 40px;
`;
export const CalculatorOutputWrapper = styled.div`
  width: 48%;
  background-color: hsl(183, 100%, 15%);
  border-radius: 10px;
`;
