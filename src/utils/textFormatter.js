/**
 * Capitalize strings
 * @param {string}
 * @returns {string}
 */
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
