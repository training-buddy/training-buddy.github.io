function toLocalDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function isoToLocalDateKey(isoString) {
  return toLocalDateKey(new Date(isoString));
}
function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}
export {
  isoToLocalDateKey as i,
  parseDateKey as p,
  toLocalDateKey as t
};
//# sourceMappingURL=date-5ZZ1N3rr.js.map
