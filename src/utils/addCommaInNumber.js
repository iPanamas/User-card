export const numberWithComma = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
