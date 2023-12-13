export function handleTotalCheckPerPerson(
  bill: string | undefined,
  person: string | undefined,
  percent: number | string | undefined
) {
  if (bill && person && percent) {
    return ((+bill + (+percent / 100) * +bill) / +person).toFixed(2);
  }
}
