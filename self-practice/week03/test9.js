function GetFreq(sentence){
    const words = sentence.split(" ")
    const wcount = {}
    if(sentence ===null){
        return undefined
    }if(sentence ===undefined){
        return undefined
    }else{
        for(let i of words){
            if (wcount[i]){
                wcount[i] +=1;
            }else{
                wcount[i] =1;
            }
            
        }
    }
}

console.log(GetFreq("esfoej kofkweo ksoeks"))