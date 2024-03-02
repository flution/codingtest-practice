
function solution(a, b) {
    let result = 0;

    // 두 주사위의 숫자가 모두 홀수인 경우
    if (a % 2 !== 0 && b % 2 !== 0) {
        result = a * a + b * b;
    }
    // 두 주사위의 숫자 중 하나만 홀수인 경우
    else if (a % 2 !== 0 || b % 2 !== 0) {
        result = 2 * (a + b);
    }
    // 두 주사위의 숫자가 모두 홀수가 아닌 경우
    else {
        result = Math.abs(a - b);
    }

    return result;
}