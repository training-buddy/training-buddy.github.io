import { s as supabase } from "./index-C1uuhD5W.js";
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
async function getLearningHistoriesByDirectory(owner, repo, path) {
  let query = supabase.from("learning_histories").select("*").eq("owner", owner).eq("repo", repo).eq("type", "fin").order("created_at", { ascending: true });
  if (path) {
    query = query.like("path", `${path}%`);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
async function getAllLearningHistories() {
  const { data, error } = await supabase.from("learning_histories").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
export {
  getLearningHistoriesByDirectory as a,
  getLearningHistoriesBySha as b,
  addLearningHistories as c,
  getAllLearningHistories as g
};
//# sourceMappingURL=learningHistories-CvuHvNjP.js.map
