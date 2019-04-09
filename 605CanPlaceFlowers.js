var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    var position=0;
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i-1]==0&&flowerbed[i]==0&&flowerbed[i+1]==0){
            position++;
            flowerbed[i]=1;
        }
    }
    return position>=n;
};
var flowerbed= [1,0,0,0,1];
console.log(canPlaceFlowers(flowerbed,1));