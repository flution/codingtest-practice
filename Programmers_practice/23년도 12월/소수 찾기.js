function solution(n) {
    let primeCount = 0;

    // 주어진 숫자까지 각 숫자가 소수인지 판별
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    return primeCount;
}

// 소수 판별 함수
function isPrime(number) {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}