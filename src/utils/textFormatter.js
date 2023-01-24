/**
 * Capitalize strings
 * @param {string}
 * @returns {string}
 */
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Format a number by grouping it to 3 digits after the decimal
 * @param {number}
 * @return {string}
 */
export const numberFormater = (number) => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
};
