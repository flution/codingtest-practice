function solution(numbers) {
    let answer = [];
    // numbers 배열 정렬
    numbers.sort((a, b) => a - b);
    // 이중 반복문을 사용하여 모든 쌍의 합을 계산
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    // Set을 사용하여 중복 제거 및 Array.from으로 배열로 변환
    answer = Array.from(new Set(answer));
    // 마지막으로 결과 배열 정렬
    answer.sort((a, b) => a - b);
    return answer;
}


//생각하기
//정수 배열의 numbers에서 하나씩 두개를 더해서 answer 배열에 넣어주면 된다.
//1. numbers 배열을 sort()한다.
//2. 이중으로 순회하며 numbers[i]에다가 numbers[j]를 더하도록 시킨다. 
//3. 그리고 해당 숫자들을 answer 배열에 푸쉬한다.
//4. 하나의 i가 끝나면 numbers[i] 상태에 numbers[j]를 다시 더하도록 한다.
//5. 그리고 해당 숫자들을 answer 배열에 다시 푸쉬한다.
//6. 마지막으로 answer 배열에서 중복된 숫자들을 제외해준다.
//7. profit.