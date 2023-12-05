function solution(new_id) {
    // 1단계: 모든 대문자를 소문자로 변환
    new_id = new_id.toLowerCase();

    // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');

    // 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나로 치환
    new_id = new_id.replace(/\.{2,}/g, '.');

    // 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
    new_id = new_id.replace(/^\.|\.$/g, '');

    // 5단계: 빈 문자열이라면, new_id에 "a"를 대입
    if (new_id === '') {
        new_id = 'a';
    }

    // 6단계: 길이가 16자 이상이면, 첫 15개 문자를 제외한 나머지 문자들 제거
    if (new_id.length >= 16) {
        new_id = new_id.substring(0, 15);
        new_id = new_id.replace(/\.$/, ''); // 마침표(.)가 끝에 위치한다면 제거
    }

    // 7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}

//생각하기
//7단계 상세 명세서 대로 만들면 됨.
//0. 먼저 인덱스 마다 split()해서 나눠준다.
//1. 먼저 toLowercase()를 통해 모든 대문자를 소문자로 만들고
//2. 인덱스를 한개씩 돌면서, 소문자/숫자/빼기/밑줄/마침표를 제외한 문자를 싹 제거함.
//3. .가 [i]와 [i+1]에 들어있다면, .를 하나로 만든다. =>  
//4. [0]과 [new_id.length - 1]이 . 이라면 제거하도록 만든다.
//5. 만약 New_id.lenght가 15보다 크다면, 나머지 뒤의 문자들을 모두 제거한다.
//6. 제거 후 4번을 다시 확인하도록 한다.
//7. 만약 new_id.length가 < 3 라면, [new_id.length - 1] 을 다음 인덱스에 추가한다.