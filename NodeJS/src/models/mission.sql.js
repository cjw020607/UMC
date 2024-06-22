export const addMission="INSERT INTO mission (restaurant_id, left_date, content, reward, certification_num) VALUES (?,?,?,?,?)";
export const getMission="SELECT * FROM mission WHERE id=?";

export const getUserMission="SELECT * FROM member_mission WHERE member_id=? AND mission_id=?";
export const setProg="UPDATE member_mission SET progress_status='진행중' WHERE id=?";
export const getMissionWithId="SELECT * FROM member_mission WHERE id=?";
