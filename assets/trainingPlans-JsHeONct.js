import { s as supabase } from "./index-CvRd15Ij.js";
async function getTrainingPlans(userId) {
  let query = supabase.from("training_plans").select("*").order("created_at", { ascending: false });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
async function getTrainingPlan(id, userId) {
  let query = supabase.from("training_plans").select("*").eq("id", id);
  const { data, error } = await query.single();
  if (error) throw error;
  return data;
}
async function createTrainingPlan(plan) {
  const { data, error } = await supabase.from("training_plans").insert(plan).select().single();
  if (error) throw error;
  return data;
}
async function updateTrainingPlan(id, plan) {
  const { data, error } = await supabase.from("training_plans").update({ ...plan, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id).select().single();
  if (error) throw error;
  return data;
}
async function deleteTrainingPlan(id) {
  const { error } = await supabase.from("training_plans").delete().eq("id", id);
  if (error) throw error;
}
export {
  getTrainingPlan as a,
  createTrainingPlan as c,
  deleteTrainingPlan as d,
  getTrainingPlans as g,
  updateTrainingPlan as u
};
//# sourceMappingURL=trainingPlans-JsHeONct.js.map
