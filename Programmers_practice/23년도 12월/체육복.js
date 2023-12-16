function solution(n, lost, reserve) {
    // 모든 학생이 1벌의 체육복을 가지고 있다고 가정
    let students = new Array(n).fill(1);
    
    // 체육복을 잃어버린 학생 처리
    lost.forEach(l => students[l - 1]--);

    // 여벌 체육복을 가져온 학생 처리
    reserve.forEach(r => students[r - 1]++);

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            // 앞 번호 학생에게 체육복을 빌릴 수 있는지 확인
            if (i > 0 && students[i - 1] > 1) {
                students[i]++;
                students[i - 1]--;
            }
            // 뒷 번호 학생에게 체육복을 빌릴 수 있는지 확인
            else if (i < n - 1 && students[i + 1] > 1) {
                students[i]++;
                students[i + 1]--;
            }
        }
    }

    // 체육수업을 들을 수 있는 학생 수 계산
    return students.filter(s => s > 0).length;
}