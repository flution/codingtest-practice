function solution(s) {
    let words = s.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let transformedWord = '';

        for (let j = 0; j < word.length; j++) {
            transformedWord += j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
        }

        result.push(transformedWord);
    }

    return result.join(' ');
}

//생각하기
//먼저 공백을 기준으로 split() 해주고, 그다음 for문을 돌면서 index[i] % 0 == 0 일때 uppercase().
//그 이외는 ToLowercase() 하게 만든다.
//마지막에 join()으로 문자열을 합쳐주고 answer에 반환하면 됨.