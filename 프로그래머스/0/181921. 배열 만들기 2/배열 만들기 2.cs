using System;
using System.Collections.Generic;

public class Solution {
    public int[] solution(int l, int r) {
        
        List<string> list = new List<string>();
        List<int> result= new List<int>();
        
        for (int i = l; i <= r; i++) //일단 5의 배수를 먼저 담은 이후에
        {
            if(i%5==0)
            {
                 list.Add(i.ToString());
            }
        }
        
        //for문 내에서 char배열로 변경 --> 각 자릿수 확인 
         //각 자릿수를 도는 동안 모두  0 또는 5 이면 새로운 배열에 담아준다.
         for(int i=0;i<list.Count;i++)
         {
             char[] arr = list[i].ToCharArray();
             int count = 0;
             
             for (int j=0;j<arr.Length;j++)
             {
                 if (arr[j] == '0' || arr[j]=='5')  
                 {
                     count++;
                 }
                 if (count == arr.Length)
                 {
                     result.Add(int.Parse(arr));
                 }
                     
             }
         }
        if(result.Count==0)
        {
            result.Add(-1);
        }
        return result.ToArray();

    }
}