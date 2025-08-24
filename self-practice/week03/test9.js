function GetFreq(sentence){
    
    if(sentence ===null){
        return undefined
    }if(sentence ===undefined){
        return undefined
    }else{
        const words = sentence.split(" ")
        const wcount = {}
        for(let i of words){
            if (wcount[i]){
                wcount[i] +=1;
            }else{
                wcount[i] =1;
            }
            
        }
        return wcount
    }
}

console.log(GetFreq("esfoej kofkweo ksoeks"))