var mostCommonWord = function(paragraph, banned) {
    var paragraph1 = paragraph;
    var arr = [];
    var max = 0;
    var paragraph2 = paragraph1.replace(/[!?',;.]/g," ")    
    var count = paragraph2.toLowerCase().split(" ").reduce(function(allElements,ele){
        if(ele in allElements){
            allElements [ele] ++;
        } else {
            allElements[ele] =1;
        }
        return allElements;
    },{});
    for(o in count){
        arr.push({"name":o,"key":count[o]});
    }
    arr.sort((a,b)=>b.key-a.key);
    for(let i=0;i<arr.length;i++){
        if(arr[i].key>max && !banned.includes(arr[i].name) && arr[i].name !=""){
            max = arr[i];
        }
    }
    return max.name;

};
var paragraph = "a, a, a, a, b,b,b,c, c";
var banned = ["a"];
console.log(mostCommonWord(paragraph,banned));