using System;

public class Solution {
    public int[] solution(int[] arr, int[,] queries) {
        int[] answer = new int[queries.GetLength(0)];
        
        for (int q = 0; q < queries.GetLength(0); q++) {
            int start = queries[q, 0];
            int end = queries[q, 1];
            int k = queries[q, 2];
            
            int minGreaterThanK = -1;
            for (int i = start; i <= end; i++) {
                if (arr[i] > k) {
                    if (minGreaterThanK == -1 || arr[i] < arr[minGreaterThanK]) {
                        minGreaterThanK = i;
                    }
                }
            }
            if (minGreaterThanK != -1) {
                answer[q] = arr[minGreaterThanK];
            } else {
                answer[q] = -1;
            }
        }
        
        return answer;
    }
}