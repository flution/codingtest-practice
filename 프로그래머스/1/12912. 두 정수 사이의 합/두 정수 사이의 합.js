function solution(a, b) {
    // a와 b 중에서 더 작은 수와 더 큰 수를 찾음
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    // 두 정수 사이의 모든 정수의 합을 계산
    return (max - min + 1) * (min + max) / 2;
}