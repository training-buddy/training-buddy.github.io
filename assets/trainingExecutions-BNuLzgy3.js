import { s as supabase } from "./index-C1uuhD5W.js";
async function getTrainingExecutions() {
  const { data, error } = await supabase.from("training_executions").select("*, training_plans(*)").order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
async function getTrainingExecution(id) {
  const { data, error } = await supabase.from("training_executions").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}
async function getTrainingExecutionsByPlanId(planId) {
  const { data, error } = await supabase.from("training_executions").select("*").eq("plan_id", planId).order("created_at", { ascending: false });
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
  getTrainingExecutionsByPlanId as a,
  createTrainingExecution as b,
  calculateStats as c,
  deleteTrainingExecution as d,
  getTrainingExecution as e,
  getTrainingExecutions as g,
  updateTrainingExecution as u
};
//# sourceMappingURL=trainingExecutions-BNuLzgy3.js.map
