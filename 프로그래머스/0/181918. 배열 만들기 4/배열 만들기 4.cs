using System;

public class Solution {
    public int[] solution(int[] arr) {
        int[] stk = new int[arr.Length]; // stk 배열의 크기를 arr의 길이로 설정
        int top = -1; // stk 배열의 가장 위를 가리킬 변수, -1로 초기화

        for (int i = 0; i < arr.Length; i++) {
            while (top >= 0 && stk[top] >= arr[i]) {
                top--; // stk의 마지막 원소가 arr[i]보다 크거나 같으면 제거
            }
            stk[++top] = arr[i]; // arr[i]를 stk에 추가
        }

        int[] result = new int[top + 1]; // stk 배열에서 유효한 값만을 담을 배열 생성
        Array.Copy(stk, result, top + 1); // stk의 내용을 result로 복사
        return result;
    }
}