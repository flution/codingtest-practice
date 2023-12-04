function solution(s) {
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p") count++;
        if (s[i] === "y") count--;
    }
    return count === 0;
}


//생각하기
//s를 Uppercase던 lowercase든 하나로 맞춰주고서, 카운트를 따로 만든다.
//그리고 return에 카운트가 같다면 true 아니면 false를 반환한다.
//그리고 만약 p와 y가 둘다 없다면 true를 반환한다.
//===(엄격한 구분)때 0이면 true를 무조건 뱉고, 0이 아니라면 false를 뱉게 만든다.