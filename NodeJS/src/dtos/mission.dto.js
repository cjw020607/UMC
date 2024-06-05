export const addMissionResponseDTO=(data)=>{
    return {
        'left_date':data[0].left_date,
        'content':data[0].content,
        'reward':data[0].reward,
    }
};