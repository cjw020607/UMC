export const userPreivewReviewResponseDTO=(data)=>{
    const reviews=[];
    console.log(data);
    for(let i=0;i<data.length;i++){
        reviews.push({
            "user_name":data[i].name,
            "rate": data[i].rate,
            "review_body":data[i].content,
            "create_date":formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews,"cursorId":data[data.length-1].review_id};
}
const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

export const userPreviewMissionOPResponseDTO=(data)=>{
    const missions=[];
    for(let i=0;i<data.length;i++){
        missions.push({
            "restaurant_id":data[i].restaurant_id,
            "left_date":data[i].left_date,
            "content": data[i].content,
            "reward":data[i].reward,
            "certification_num":data[i].certification_num,
            "progress_status":data[i].progress_status
        })
    }
    return {"missionData": missions,"cursorId":data[data.length-1].mission_id};
}

export const updateProgClearResponseDTO=(data)=>{
    const missions=[];
    for(let i=0;i<data.length;i++){
        missions.push({
            "restaurant_id":data[i].restaurant_id,
            "left_date":data[i].left_date,
            "content": data[i].content,
            "reward":data[i].reward,
            "certification_num":data[i].certification_num,
            "progress_status":data[i].progress_status
        })
    }
    console.log(missions);
    return {"missionData": missions,"cursorId":data[data.length-1].mission_id};
}