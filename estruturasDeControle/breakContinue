const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in nums) {
    if (i == 5){
        break
    }
    console.log(`${[i]} = ${nums[i]}`);
}

for (let i in nums) {
    if (i == 5){
        console.log('Pulou')
        continue
    }
    console.log(`${i} = ${nums[i]}`);
}

forExterno: for (i in nums){ // não utilizado
    for (j in nums) {
        if(i == 2 && j == 3) {
            break forExterno
        }
        console.log(`Par = ${i}, ${j}`);
    }
}