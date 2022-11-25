export default function Calculation(
  value1: number | undefined,
  value2: number | undefined,
  operations: string
) {
  let result: string | number = "";
  if (value1 === undefined || value2 === undefined) {
    return "";
  }

  if (isNaN(value1) || isNaN(value2)) {
    result = "";
    return result;
  }

  switch (operations) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    case "^":
      result = value1 ** value2;
      break;
  }
  return result;
}
