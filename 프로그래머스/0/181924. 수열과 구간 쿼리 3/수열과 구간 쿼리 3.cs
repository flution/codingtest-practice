using System;

public class Solution
{
    public int[] solution(int[] arr, int[,] queries)
    {
        int[] answer = arr;

        for (int i = 0; i < queries.GetLength(0); i++)
        {
            int f = queries[i, 0];
            int s = queries[i, 1];

            int temp = answer[f];
            answer[f] = answer[s];
            answer[s] = temp;

        }
        return answer;
    }
}