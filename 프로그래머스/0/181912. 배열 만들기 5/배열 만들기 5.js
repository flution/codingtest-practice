function solution(intStrs, k, s, l) {
    // 결과를 저장할 배열
    const result = [];

    // intStrs 배열을 순회하며 각 원소에 대해 연산을 수행
    for (let i = 0; i < intStrs.length; i++) {
        // s 인덱스에서 시작하는 길이 l의 부분 문자열을 추출
        const subStr = intStrs[i].substring(s, s + l);
        // 추출한 부분 문자열을 정수로 변환
        const num = parseInt(subStr, 10);
        // 변환한 정수가 k보다 큰 경우 결과 배열에 추가
        if (num > k) {
            result.push(num);
        }
    }

    // 조건을 만족하는 정수들을 담은 배열 반환
    return result;
}