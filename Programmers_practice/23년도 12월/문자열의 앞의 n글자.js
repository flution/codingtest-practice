function solution(my_string, n) {
    return my_string.slice(0, n);
    
}

//생각하기
//간단한 문제. n만큼만 my_string[n]만큼만 출력하면 된다.
//방법론은 여러가지. slice(n)만큼 잘라도 되고
//splice 해도 되고.

//오늘의 배울점.
//방법론이 여러가지라는 점이다.
//slice(0, n) 해야 n만큼 쪼개진다는거.
//substring()도 가능하다는거.
/* for문을 돌면서 n[i]만큼 추가해도 된다는거.
    function solution(m, n) {
    var answer = '';
    for(let i = 0; i<n; i++){
        answer += m[i]
    }
    return answer; */