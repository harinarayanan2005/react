function sUm(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}
console.log(sUm(10,20,835875))
console.log(sUm(9,15,26,45,95,10))