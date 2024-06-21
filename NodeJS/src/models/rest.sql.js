export const addRestaurant="INSERT INTO restaurant (name, category, address, open_status,region_id) VALUES (?,?,?,?,?)";
export const getRestaurant="SELECT * FROM restaurant WHERE id=?";
export const getRegionId="SELECT id FROM region WHERE name=?";
export const getPreviewMissionByRestIdAtFirst=
"SELECT m.left_date,m.content,m.reward,m.certification_num "
+"FROM restaurant r JOIN mission m on r.id=m.restaurant_id "
+"WHERE m.restaurant_id=? "
+"ORDER BY r.id DESC LIMIT ?;";
export const getPreviewMissionByRestId=
"SELECT m.left_date,m.content,m.reward,m.certification_num "
+"FROM restaurant r JOIN mission m on r.id=m.restaurant_id "
+"WHERE m.restaurant_id=? AND m.id<? "
+"ORDER BY r.id DESC LIMIT ?;";