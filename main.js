const element = [1,2,23,45,78,63,51,-6,-54,-32,-15,-57,-87,53,-89]


number = (num) => {
let musbat = 0 
let manfiy = 0 

for (let i = 0; i < element.length; i++) {
    const elements = element[i];
    console.log(elements);

    if (element[i] < 0) {
        manfiy++
    } else {
       
        musbat += element[i]
    }
    
}
return[musbat,manfiy];
}

// console.log(number());
