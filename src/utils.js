
export const formatLargeCurrency = (amount) => {
  const floored = Math.floor(amount);
  const places = parseInt(((floored.toString().length - 1)/ 3).toString());
  let display;
  switch (places) {
    case 0:
      display = floored.toString();
      break;
    case 1:
      display = `${(floored/1_000).toFixed(1)}K`;
      break;
    case 2:
      display = `${(floored/1_000_000).toFixed(1)}m`;
      break;
    case 3:
      display = `${(floored/1_000_000_000).toFixed(1)}B`;
      break;
    default:
      throw new Error("Bad amount value");
  }
  return display;
}