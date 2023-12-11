import {
  CalculatorButton,
  CalculatorInput,
  CalculatorInputsWrapper,
  CalculatorOutputButton,
  CalculatorOutputDescription,
  CalculatorOutputItemWrapper,
  CalculatorOutputTitle,
  CalculatorOutputValue,
  CalculatorOutputWrapper,
  CalculatorPersonInput,
  CalculatorTipList,
  CalculatorWrapper,
  CustomTipInput,
  InputTitle,
  InputTitleTip,
  TitlePersonInput,
} from "./styled";
export default function Calculator() {
  return (
    <CalculatorWrapper>
      <CalculatorInputsWrapper>
        <InputTitle>Bill</InputTitle>
        <CalculatorInput maxLength={3} type="number" placeholder="0" />
        <InputTitleTip>Select Tip %</InputTitleTip>
        <CalculatorTipList>
          <CalculatorButton>5%</CalculatorButton>
          <CalculatorButton>10%</CalculatorButton>
          <CalculatorButton>15%</CalculatorButton>
          <CalculatorButton>20%</CalculatorButton>
          <CalculatorButton>25%</CalculatorButton>
          <CustomTipInput type="number" placeholder="Custom" />
        </CalculatorTipList>
        <TitlePersonInput>Number of People</TitlePersonInput>
        <CalculatorPersonInput type="number" placeholder="0" />
      </CalculatorInputsWrapper>
      <CalculatorOutputWrapper>
        <div>
          <CalculatorOutputItemWrapper>
            <div>
              <CalculatorOutputTitle>Tip Amount</CalculatorOutputTitle>
              <CalculatorOutputDescription>
                / person
              </CalculatorOutputDescription>
            </div>
            <CalculatorOutputValue>$0.00</CalculatorOutputValue>
          </CalculatorOutputItemWrapper>
          <CalculatorOutputItemWrapper>
            <div>
              <CalculatorOutputTitle>Total</CalculatorOutputTitle>
              <CalculatorOutputDescription>
                / person
              </CalculatorOutputDescription>
            </div>
            <CalculatorOutputValue>$0.00</CalculatorOutputValue>
          </CalculatorOutputItemWrapper>
        </div>
        <CalculatorOutputButton>RESET</CalculatorOutputButton>
      </CalculatorOutputWrapper>
    </CalculatorWrapper>
  );
}
