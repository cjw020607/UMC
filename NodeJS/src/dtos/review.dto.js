export const addReviewResponseDTO=(data)=>{
    return {
        'restaurant_id':data[0].restaurant_id,
        'rate':data[0].rate,
        'content':data[0].content
    };
}