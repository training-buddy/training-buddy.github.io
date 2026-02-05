import { s as supabase } from "./index-BH1KDpcB.js";
async function addLearningHistories(items) {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  const rows = items.map((item) => ({
    ...item,
    user_id: user.id
  }));
  const { error } = await supabase.from("learning_histories").insert(rows);
  if (error) throw error;
}
async function getLearningHistoriesBySha(sha) {
  const { data, error } = await supabase.from("learning_histories").select("*").eq("sha", sha).order("created_at", { ascending: true });
  if (error) throw error;
  return data ?? [];
}
async function getAllLearningHistories() {
  const { data, error } = await supabase.from("learning_histories").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
export {
  getLearningHistoriesBySha as a,
  addLearningHistories as b,
  getAllLearningHistories as g
};
//# sourceMappingURL=learningHistories-BgzgXilh.js.map
