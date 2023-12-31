function solution(t, p) {
    let count = 0;
    const pLength = p.length;
    const pValue = parseInt(p, 10);

    // t의 모든 부분 문자열을 순회합니다.
    for (let i = 0; i <= t.length - pLength; i++) {
        // 부분 문자열 추출
        const subStr = t.substring(i, i + pLength);

        // 부분 문자열의 정수 값이 pValue보다 작거나 같은지 확인
        if (parseInt(subStr, 10) <= pValue) {
            count++;
        }
    }

    return count;
}