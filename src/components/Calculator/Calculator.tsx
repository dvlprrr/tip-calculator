import { useState } from "react";
import { handleTipAmountPerPerson } from "../../utils/handleTipAmountPerPerson";
import { handleTotalCheckPerPerson } from "../../utils/handleTotalCheckPerPerson";
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
  const percent = [5, 10, 15, 20, 50];
  const [bill, setBill] = useState<string>();
  const [people, setPeople] = useState<string>();
  const [customPercent, setCustomPercent] = useState<string | number>();
  const [tipAmount, setTipAmount] = useState<string>();
  const [totalCheck, setTotalCheck] = useState<string>();
  const [activeIndex, setActiveIndex] = useState<number | string>();
  const [error, setError] = useState<boolean>();
  // const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handlePercent = (index: number, item: number) => {
    setActiveIndex(index);
    setTipAmount(handleTipAmountPerPerson(bill, people, item));
    setTotalCheck(handleTotalCheckPerPerson(bill, people, item));
  };
  const handleCustomPercent = (item: string) => {
    setCustomPercent(item);
    setTipAmount(handleTipAmountPerPerson(bill, people, item));
    setTotalCheck(handleTotalCheckPerPerson(bill, people, item));
  };
  const restAllStates = () => {
    setBill("");
    setPeople("");
    setTipAmount("");
    setTotalCheck("");
    setCustomPercent("");
    setActiveIndex("");
  };
  return (
    <CalculatorWrapper>
      <CalculatorInputsWrapper>
        <InputTitle>Bill</InputTitle>
        <CalculatorInput
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
          type="number"
          placeholder="0"
        />
        <InputTitleTip>Select Tip %</InputTitleTip>
        <CalculatorTipList>
          {percent.map((item, index) => {
            return (
              <CalculatorButton
                disabled={!(bill && people)}
                key={index}
                active={index === activeIndex ? true : false}
                onClick={() => {
                  handlePercent(index, item);
                }}
              >
                {item}%
              </CalculatorButton>
            );
          })}
          <CustomTipInput
            value={customPercent}
            onClick={() => {
              setActiveIndex("");
            }}
            onChange={(e) => {
              handleCustomPercent(e.target.value);
            }}
            type="number"
            placeholder="Custom"
          />
        </CalculatorTipList>
        <TitlePersonInput>Number of People</TitlePersonInput>
        <CalculatorPersonInput
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          type="number"
          placeholder="0"
        />
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
            <CalculatorOutputValue>
              ${Boolean(tipAmount) ? tipAmount : "0.00"}
            </CalculatorOutputValue>
          </CalculatorOutputItemWrapper>
          <CalculatorOutputItemWrapper>
            <div>
              <CalculatorOutputTitle>Total</CalculatorOutputTitle>
              <CalculatorOutputDescription>
                / person
              </CalculatorOutputDescription>
            </div>
            <CalculatorOutputValue>
              ${Boolean(totalCheck) ? totalCheck : "0.00"}
            </CalculatorOutputValue>
          </CalculatorOutputItemWrapper>
        </div>
        <CalculatorOutputButton
          disabled={!(bill || people)}
          onClick={() => restAllStates()}
        >
          RESET
        </CalculatorOutputButton>
      </CalculatorOutputWrapper>
    </CalculatorWrapper>
  );
}
