export const addReviews="INSERT INTO review (member_id, restaurant_id, rate, content) VALUES (?,?,?,?)";
export const getReviews="SELECT * FROM review WHERE id=?";