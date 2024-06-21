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

export const getMissionOPByUserIdAtFirst=
"SELECT m.restaurant_id,m.left_date,m.content,m.reward,m.certification_num,mm.progress_status "
+"FROM member_mission mm JOIN mission m on mm.mission_id=m.id "
+"WHERE mm.member_id=? AND mm.progress_status=? "
+"ORDER BY mm.id DESC LIMIT ?;";

export const getMissionOPByUserId=
"SELECT m.restaurant_id,m.left_date,m.content,m.reward,m.certification_num,mm.progress_status "
+"FROM member_mission mm JOIN mission m on mm.mission_id=m.id "
+"WHERE mm.member_id=? AND mm.progress_status=? AND mm.id<? "
+"ORDER BY mm.id DESC LIMIT ?;";