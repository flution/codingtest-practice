function solution(myString) {
    // 주어진 문자열을 배열로 변환
    let arr = myString.split('');

    // 배열의 각 원소에 대해 'l'보다 앞서는 문자를 찾아 'l'로 변환
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 'l') {
            arr[i] = 'l';
        }
    }

    // 변환된 배열을 문자열로 다시 합치기
    return arr.join('');
}