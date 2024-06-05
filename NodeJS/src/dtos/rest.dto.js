export const addRestResponseDTO=(data)=>{
    return {
        'name':data[0].name,
        'address':data[0].address,
        'region_id':data[0].region_id
    };
}