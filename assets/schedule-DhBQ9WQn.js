const WEEKDAY_MAP = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};
function calculateTotalSessions(plan) {
  return Math.ceil(plan.total_amount / plan.unit_amount);
}
function calculateEndDate(plan) {
  const totalSessions = calculateTotalSessions(plan);
  const startDate = new Date(plan.start_date);
  if (plan.schedule_type === "daily") {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + totalSessions - 1);
    return endDate;
  }
  const scheduleDays = plan.schedule_days ?? [];
  if (scheduleDays.length === 0) {
    return startDate;
  }
  const dayNumbers = scheduleDays.map((d) => WEEKDAY_MAP[d]).sort((a, b) => a - b);
  const currentDate = new Date(startDate);
  let sessionsScheduled = 0;
  while (sessionsScheduled < totalSessions) {
    const currentDay = currentDate.getDay();
    if (dayNumbers.includes(currentDay)) {
      sessionsScheduled++;
      if (sessionsScheduled >= totalSessions) {
        break;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}
function formatDate(date) {
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function getWeekDayLabel(day) {
  const labels = {
    mon: "월",
    tue: "화",
    wed: "수",
    thu: "목",
    fri: "금",
    sat: "토",
    sun: "일"
  };
  return labels[day];
}
const ALL_WEEKDAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const NUMBER_TO_WEEKDAY = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function isScheduledForDate(plan, date) {
  const startDate = new Date(plan.start_date);
  startDate.setHours(0, 0, 0, 0);
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);
  if (checkDate < startDate) {
    return false;
  }
  const endDate = calculateEndDate(plan);
  endDate.setHours(23, 59, 59, 999);
  if (checkDate > endDate) {
    return false;
  }
  if (plan.schedule_type === "daily") {
    return true;
  }
  const scheduleDays = plan.schedule_days ?? [];
  const dayOfWeek = NUMBER_TO_WEEKDAY[checkDate.getDay()];
  return scheduleDays.includes(dayOfWeek);
}
function getTodaysPlans(plans) {
  const today = /* @__PURE__ */ new Date();
  return plans.filter((plan) => isScheduledForDate(plan, today));
}
export {
  ALL_WEEKDAYS as A,
  getWeekDayLabel as a,
  calculateEndDate as b,
  calculateTotalSessions as c,
  formatDate as f,
  getTodaysPlans as g
};
//# sourceMappingURL=schedule-DhBQ9WQn.js.map
