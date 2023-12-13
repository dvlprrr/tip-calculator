export function handleTipAmountPerPerson(
  bill: string | undefined,
  person: string | undefined,
  percent: string | number | undefined
) {
  if (bill && person && percent) {
    return (((+percent / 100) * +bill) / +person).toFixed(2);
  }
}
