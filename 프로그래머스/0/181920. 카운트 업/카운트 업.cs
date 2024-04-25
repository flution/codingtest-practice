using System;

public class Solution {
    public int[] solution(int start_num, int end_num) {
        // 결과를 담을 배열의 크기 계산
        int size = end_num - start_num + 1;
        // 결과를 담을 배열 생성
        int[] answer = new int[size];
        
        // start_num부터 end_num까지의 숫자를 배열에 담기
        for (int i = 0; i < size; i++) {
            answer[i] = start_num + i;
        }
        
        // 결과 반환
        return answer;
    }
}