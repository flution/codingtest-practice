function solution(num_list) {
    // 리스트를 순회합니다.
    for (let i = 0; i < num_list.length; i++) {
        // 음수가 발견되면 해당 인덱스를 반환합니다.
        if (num_list[i] < 0) {
            return i;
        }
    }
    // 음수가 없으면 -1을 반환합니다.
    return -1;
}

//생각하기
//if < index[i]가 0이하라면 result에 + 한다.
//index[i]중에서 가장 먼저 나오는 음수를 리턴하기 위해 findindex를 사용한다.
//만약 모든 index[i]가 > 0 라면, -1 을 리턴한다.