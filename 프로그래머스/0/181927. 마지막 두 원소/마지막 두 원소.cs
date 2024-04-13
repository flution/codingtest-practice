using System;

public class Solution {
    public int[] solution(int[] num_list) {
        int length = num_list.Length;
        
        int lastElement = num_list[length - 1];
        int secondLastElement = num_list[length - 2];
        
        if (lastElement > secondLastElement) {
            int newValue = lastElement - secondLastElement;
            Array.Resize(ref num_list, length + 1);
            num_list[length] = newValue;
        }
        else {
            int newValue = lastElement * 2;
            Array.Resize(ref num_list, length + 1);
            num_list[length] = newValue;
        }
        
        return num_list;
    }
}