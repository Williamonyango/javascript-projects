function gcd(a, b) {
    while(b!==0){
        let temp = b;
        b = a%b;
        a=temp;
    }
    return a;
}
function lcm(a, b){
    return (a*b)/gcd(a,b);
}
function smallestMultiple(n){
    let multiple = 1;
    for(let i=1; i<=n; i++){
        multiple=lcm(multiple,i);
    }
    return multiple;
}
console.log(smallestMultiple(20));