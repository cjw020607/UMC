export const addMission="INSERT INTO mission (restaurant_id, left_date, content, reward, certification_num) VALUES (?,?,?,?,?)";
export const getMission="SELECT * FROM mission WHERE id=?";