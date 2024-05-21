import express from "express";

const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("반가워요 노린이 여러분");
});

app.listen(PORT,()=>{
    console.log("서버가 3000번 포트에서 입력을 받기 시작했어요!");
});