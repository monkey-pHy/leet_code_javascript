var countAndSay = function(n) {
    if(n==1) return "1";
    let counySay = "1";
    for(let i=2;i<=n;i++){
        let numCount =1;
        let temp = "";
        for(let j=0;j<countSay.length;j++){
            if(countSay[i]==counySay[j+1]){
                numCount++;
            }else{
                temp+=numCount.toString()+countSay[j];
                numCount =1;
            }
        }
        countSay = temp;
    }
    return counySay;
};