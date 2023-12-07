function solution(N) {
    let sum = 0;
    const numberString = N.toString(); // 숫자를 문자열로 변환
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]); // 각 자릿수를 숫자로 변환하여 더함
    }
    return sum;
}

//생각하기
//자연수 n을 자리수마다 나눠서 => splice() for문을 돌면서 각 index[i]마다 answer에 += 한다.