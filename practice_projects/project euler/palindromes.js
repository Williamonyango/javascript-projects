function palindromes(num) {
    let stringed_num = String(num)
    // let reversed_num = stringed_num.split('').reverse().join('')
    let reverse = ''
    for (let i = stringed_num.length - 1; i >= 0; i--) {
        reverse += stringed_num[i]
    }

    return (stringed_num === reverse)

}

// palindromes(8008)

function multipliers() {
    let answer = 0
    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            let result = i * j
            if (palindromes(result) && result > answer) {
                answer = result
                // console.log(i,j)
            }

        }
    }

    console.log(answer)
}
multipliers()
