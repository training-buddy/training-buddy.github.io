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
function calculateEndDate(plan, executions) {
  const hasExecutions = executions && executions.length > 0;
  let fromDate;
  let sessions;
  if (hasExecutions) {
    const completedUnits = executions.reduce((sum, e) => sum + e.unit_count, 0);
    const remainingAmount = Math.max(0, plan.total_amount - completedUnits);
    sessions = Math.ceil(remainingAmount / plan.unit_amount);
    fromDate = /* @__PURE__ */ new Date();
  } else {
    sessions = calculateTotalSessions(plan);
    fromDate = new Date(plan.start_date);
  }
  if (sessions <= 0) return fromDate;
  if (plan.schedule_type === "daily") {
    const endDate = new Date(fromDate);
    endDate.setDate(endDate.getDate() + sessions - 1);
    return endDate;
  }
  const scheduleDays = plan.schedule_days ?? [];
  if (scheduleDays.length === 0) {
    return fromDate;
  }
  const dayNumbers = scheduleDays.map((d) => WEEKDAY_MAP[d]).sort((a, b) => a - b);
  const currentDate = new Date(fromDate);
  let sessionsScheduled = 0;
  while (sessionsScheduled < sessions) {
    const currentDay = currentDate.getDay();
    if (dayNumbers.includes(currentDay)) {
      sessionsScheduled++;
      if (sessionsScheduled >= sessions) {
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
  return plans.filter((plan) => !plan.completed_at && isScheduledForDate(plan, today));
}
export {
  ALL_WEEKDAYS as A,
  getWeekDayLabel as a,
  calculateEndDate as b,
  calculateTotalSessions as c,
  formatDate as f,
  getTodaysPlans as g
};
//# sourceMappingURL=schedule-CIHJDRP1.js.map
