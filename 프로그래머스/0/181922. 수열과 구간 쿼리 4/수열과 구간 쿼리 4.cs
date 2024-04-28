using System;

public class Solution {
    public int[] solution(int[] arr, int[,] queries) {
        int l = queries.GetLength(0);
        for(int i = 0; i<l; i++){
            int s = queries[i,0];
            int e = queries[i,1];
            int k = queries[i,2];
            for(int j = s; j<=e; j++){
                if(j%k==0)
                    arr[j]++;
            }
        }
        return arr;
    }
}