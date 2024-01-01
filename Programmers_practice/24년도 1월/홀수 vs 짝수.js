function solution(num_list) {
    let oddSum = 0;  // 홀수 번째 원소들의 합
    let evenSum = 0; // 짝수 번째 원소들의 합

    // num_list를 순회하면서 홀수 번째와 짝수 번째 원소들의 합을 계산
    num_list.forEach((num, index) => {
        if (index % 2 === 0) {
            oddSum += num; // 1번 원소가 홀수 번째로 간주됨 (0-based index)
        } else {
            evenSum += num;
        }
    });

    // 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 더 큰 값을 반환
    return Math.max(oddSum, evenSum);
}