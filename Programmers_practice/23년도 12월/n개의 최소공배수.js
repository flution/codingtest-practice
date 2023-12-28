function gcd(a, b) {
    // 최대공약수 계산
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a, b) {
    // 최소공배수 계산
    return a * b / gcd(a, b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur));
}