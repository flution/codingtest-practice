function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
        }
    }
    return n;
}


//생각하기
//간단한 문제. control를 slice()해서 index를 돌면서 해당 인덱스가 w s d a 셋중에 하나면 대응하는 값을 만들면 됨.
//for문을 돌면서 if(control[i] == "w") { n += 1 } 이런식으로 하면 됨. 그래서 n이 다 더해지면 그걸 answer값에 넣으면 됨. 