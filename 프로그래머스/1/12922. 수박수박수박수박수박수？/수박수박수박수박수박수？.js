function solution(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        // 짝수 인덱스일 때는 "수"를, 홀수 인덱스일 때는 "박"을 추가합니다.
        result += i % 2 === 0 ? '수' : '박';
    }
    return result;
}
