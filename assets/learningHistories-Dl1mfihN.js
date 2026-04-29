import { s as supabase } from "./index-BnUnq6VV.js";
async function addLearningHistories(items, userId) {
  const finalUserId = userId || (await supabase.auth.getUser()).data.user?.id;
  if (!finalUserId) throw new Error("Not authenticated");
  const rows = items.map((item) => ({
    ...item,
    user_id: finalUserId
  }));
  const { error } = await supabase.from("learning_histories").insert(rows);
  if (error) throw error;
}
async function getLearningHistoriesBySha(sha, userId) {
  let query = supabase.from("learning_histories").select("*").eq("sha", sha).order("created_at", { ascending: true });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
async function getAllLearningHistories(userId) {
  let query = supabase.from("learning_histories").select("*").order("created_at", { ascending: false });
  if (userId) {
    query = query.eq("user_id", userId);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
export {
  getLearningHistoriesBySha as a,
  addLearningHistories as b,
  getAllLearningHistories as g
};
//# sourceMappingURL=learningHistories-Dl1mfihN.js.map
