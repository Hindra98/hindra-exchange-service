export function totalPriceWithDiscount(
  price: number,
  units: number,
  discount: number = 0
) {
  return Math.round(price * units * (1 - discount / 100));
}

export function totalPriceWithVat(
  price: number,
  units: number,
  discount: number,
  tva: number,
  expMode: number = 1
) {
  const r = totalPriceWithDiscount(price, units, discount);
  return Math.round((r + (r * tva) / 100) * expMode);
}

export function formatCurrency(
  amount: string,
  currencySymbol: string = "FCFA",
  currencyPosition: number = 0,
  currencyGroupSizes: number = 3,
  currencyGroupSeparator: string = " ",
  currencyDecimalDigits: number = 0,
  currencyDecimalSeparator: string = ","
) {
  let dec = "";
  if (isNaN(parseFloat(amount) * 1)) {
    return false;
  } else {
    dec =
      amount?.toString()?.split(".")[1] ||
      amount?.toString()?.split(",")[1] ||
      "";
    amount =
      amount?.toString()?.split(".")[0] || amount?.toString()?.split(",")[0];
  }

  const reversed = amount?.split("")?.reverse()?.join("");
  const formatCurrency = reversed
    ?.match(new RegExp(".{1," + currencyGroupSizes + "}", "g"))
    ?.join(currencyGroupSeparator);

  dec =
    currencyDecimalDigits === 0 || dec === ""
      ? ""
      : currencyDecimalSeparator + dec?.slice(0, currencyDecimalDigits);

  return currencyPosition === 0
    ? formatCurrency?.split("")?.reverse()?.join("") + dec + currencySymbol
    : currencySymbol + formatCurrency?.split("")?.reverse()?.join("") + dec;
}

export function formatCurrencyWithoutCurrency(
  amount: string,
  currencyGroupSizes: number = 3,
  currencyGroupSeparator: string = " ",
  currencyDecimalDigits: number = 0,
  currencyDecimalSeparator: string = ","
) {
  let dec = "";
  if (isNaN(parseFloat(amount) * 1)) {
    return false;
  } else {
    dec =
      amount?.toString()?.split(".")[1] ||
      amount?.toString()?.split(",")[1] ||
      "";
    amount =
      amount?.toString()?.split(".")[0] || amount?.toString()?.split(",")[0];
  }

  const reversed = amount?.split("")?.reverse()?.join("");
  const formatCurrency = reversed
    ?.match(new RegExp(".{1," + currencyGroupSizes + "}", "g"))
    ?.join(currencyGroupSeparator);

  dec =
    currencyDecimalDigits === 0 || dec === ""
      ? ""
      : currencyDecimalSeparator + dec?.slice(0, currencyDecimalDigits);

  return formatCurrency?.split("")?.reverse()?.join("") + dec;
}

export function formatNumber(
  numberFormat: string,
  numberGroupSizes = 3,
  numberGroupSeparator = "",
  numberDecimalDigits = 0,
  numberDecimalSeparator = ""
) {
  let dec = "";
  if (isNaN(parseFloat(numberFormat) * 1)) {
    return false;
  } else {
    dec =
      numberFormat.toString().split(".")[1] ||
      numberFormat.toString().split(",")[1];
    numberFormat =
      numberFormat.toString().split(".")[0] ||
      numberFormat.toString().split(",")[0];
  }

  const reversed = numberFormat.split("").reverse().join("");
  const formatNumber =
    reversed
      .match(new RegExp(".{1," + numberGroupSizes + "}", "g"))
      ?.join(numberGroupSeparator) || "";

  dec =
    numberDecimalDigits === 0
      ? ""
      : numberDecimalSeparator + dec.slice(0, numberDecimalDigits);

  return formatNumber.split("").reverse().join("") + dec;
}
