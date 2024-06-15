export const addRestaurant="INSERT INTO restaurant (name, category, address, open_status,region_id) VALUES (?,?,?,?,?)";
export const getRestaurant="SELECT * FROM restaurant WHERE id=?";
export const getRegionId="SELECT id FROM region WHERE name=?";