export const getReviewByUserIdAtFirst=
"SELECT m.name,r.id, r.rate, r.content, r.created_at "
+ "FROM review r JOIN member m on r.member_id = m.id "
+ "WHERE r.member_id = ? "
+ "ORDER BY r.id DESC LIMIT ?;";

export const getReviewByUserId=
"SELECT m.name, r.id, r.rate, r.content, r.created_at "
+ "FROM review r JOIN member m on r.member_id = m.id "
+ "WHERE r.member_id = ? AND r.id < ? "
+ "ORDER BY r.id DESC LIMIT ?;";
