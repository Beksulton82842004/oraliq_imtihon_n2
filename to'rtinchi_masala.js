const elemennt = [1,2,23,45,78,63,51,-6,-54,-32,-15,-57,-87,53,-89]


number = (num) => {

    const newArray = []

for (let i = 0; i < elemennt.length; i++) {
    const elements = elemennt[i];
    console.log(elements);

    if (elemennt[i] < 0) {
    newArray.push(elements)        
    } 
    
    
}
console.log(newArray);
return[newArray];

}

// console.log(number());
