export const addRestResponseDTO=(data)=>{
    return {
        'name':data[0].name,
        'address':data[0].address,
        'region_id':data[0].region_id
    };
}

export const restPreviewMissionResponseDTO=(data)=>{
    const missions=[];
    for(let i=0;i<data.length;i++){
        missions.push({
            "left_date":data[i].left_date,
            "content": data[i].content,
            "reward":data[i].reward,
            "certification_num":data[i].certification_num
        })
    }
    return {"missionData": missions,"cursorId":data[data.length-1].mission_id};
}
