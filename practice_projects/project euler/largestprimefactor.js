function largestPrime(target) {
    let factors = []
    let temp = target

    for (let i = 2; i <= temp; i++) {
        if (temp % i == 0) {
            factors.push(i)
            temp /= i
        }
    }

    console.log(factors[factors.length-1])
}

largestPrime(600851475143)