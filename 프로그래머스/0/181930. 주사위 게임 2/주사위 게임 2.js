function solution(a, b, c) {
    var answer = 0;
        if (a !== b && b !== c && c !== a){
            answer = a+b+c
        } if ( a == b || b == c || c == a ) {
            answer = (a+b+c) * ((a**2) + (b**2) + (c**2))
        } if ( a == b && b == c && c == a ) {
            answer = (a+b+c) * ((a**2) + (b**2) + (c**2)) * ((a**3) + (b**3) + (c**3))
    
        }
        
    return answer;
}


//생각하기
//숫자가 하나면 그냥 a+b+c, 숫자가 두개면 (a+b+c)+(a^2+b^2+c^2) / 숫자가 세개면 a+b+c a+b+c
//경우의 수. 숫자가 다 다르다 / 숫자가 a,b가 같다 / 숫자가 b,c가 같다, tntw