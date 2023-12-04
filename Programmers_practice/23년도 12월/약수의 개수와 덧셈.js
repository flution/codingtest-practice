function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let count = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }

        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;
}

//생각하기
//left부터 right까지여야 한다는거임. for문이.
//그러고서 left부터 right까지 싹다 1부터 right까지 나눠보고. 나머지가 0이라면 count에 계상한다.
//count가 짝수라면 answer에 더하고, count가 홀수라면 answer에 마이너스한다.