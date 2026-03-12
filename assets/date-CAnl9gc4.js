function toLocalDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function isoToLocalDateKey(isoString) {
  return toLocalDateKey(new Date(isoString));
}
export {
  isoToLocalDateKey as i,
  toLocalDateKey as t
};
//# sourceMappingURL=date-CAnl9gc4.js.map
