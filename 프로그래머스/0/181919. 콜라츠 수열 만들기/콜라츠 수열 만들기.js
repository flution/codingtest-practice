function solution(n) {
    let sequence = [];

    while (n !== 1) {
        sequence.push(n);
        if (n % 2 === 0) {
            // n이 짝수일 경우
            n = n / 2;
        } else {
            // n이 홀수일 경우
            n = 3 * n + 1;
        }
    }
    
    sequence.push(1); // 마지막으로 1을 추가
    return sequence;
}