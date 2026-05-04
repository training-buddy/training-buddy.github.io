import { s as supabase } from "./index-CvRd15Ij.js";
async function getTrainingExecutions(userId) {
  let query = supabase.from("training_executions").select("*, training_plans(*)").order("created_at", { ascending: false });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
async function getTrainingExecution(id, userId) {
  let query = supabase.from("training_executions").select("*").eq("id", id);
  const { data, error } = await query.single();
  if (error) throw error;
  return data;
}
async function getTrainingExecutionsByPlanId(planId, userId) {
  let query = supabase.from("training_executions").select("*").eq("plan_id", planId).order("created_at", { ascending: false });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
async function createTrainingExecution(execution) {
  const { data, error } = await supabase.from("training_executions").insert(execution).select().single();
  if (error) throw error;
  return data;
}
async function deleteTrainingExecution(id) {
  const { error } = await supabase.from("training_executions").delete().eq("id", id);
  if (error) throw error;
}
async function updateTrainingExecution(id, execution) {
  const { data, error } = await supabase.from("training_executions").update(execution).eq("id", id).select().single();
  if (error) throw error;
  return data;
}
async function getCompletedUnitsByPlanIds(planIds, userId) {
  if (planIds.length === 0) return /* @__PURE__ */ new Map();
  let query = supabase.from("training_executions").select("plan_id, unit_count").in("plan_id", planIds);
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  const map = /* @__PURE__ */ new Map();
  for (const row of data ?? []) {
    map.set(row.plan_id, (map.get(row.plan_id) ?? 0) + row.unit_count);
  }
  return map;
}
async function getTodaysExecutionsByPlanIds(planIds, userId) {
  if (planIds.length === 0) return [];
  const today = /* @__PURE__ */ new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
    999
  ).toISOString();
  let query = supabase.from("training_executions").select("*").in("plan_id", planIds).gte("completed_at", startOfDay).lte("completed_at", endOfDay);
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
function calculateStats(executions) {
  if (executions.length === 0) {
    return {
      totalSessions: 0,
      totalUnits: 0,
      totalDuration: 0,
      avgDuration: 0,
      avgDurationPerUnit: 0
    };
  }
  const totalSessions = executions.length;
  const totalUnits = executions.reduce((sum, e) => sum + e.unit_count, 0);
  const totalDuration = executions.reduce((sum, e) => sum + e.duration_seconds, 0);
  const avgDuration = totalDuration / totalSessions;
  const avgDurationPerUnit = totalUnits > 0 ? totalDuration / totalUnits : 0;
  return {
    totalSessions,
    totalUnits,
    totalDuration,
    avgDuration,
    avgDurationPerUnit
  };
}
export {
  getCompletedUnitsByPlanIds as a,
  getTrainingExecutions as b,
  getTrainingExecutionsByPlanId as c,
  deleteTrainingExecution as d,
  calculateStats as e,
  createTrainingExecution as f,
  getTodaysExecutionsByPlanIds as g,
  getTrainingExecution as h,
  updateTrainingExecution as u
};
//# sourceMappingURL=trainingExecutions-CwyzMcCF.js.map
