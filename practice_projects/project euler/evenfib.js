function evenfib(first_value, second_value, lim) {
    let fib = [first_value, second_value]
    let result = 0
    let limit = lim
    // console.log(fib[fib.length - 2])

    while (true) {
        let last = fib[fib.length - 1]
        let snd_last = fib[fib.length - 2]
        let sum = last + snd_last

        fib.push(sum)

        if (sum >= limit) {
            break
        }
    }

    for (let i = 0; i < fib.length - 1; i++) {
        if (fib[i] % 2 == 0) {
            result += fib[i]
        }
    }

    console.log(result)
}

evenfib(1, 2, 4000000)



