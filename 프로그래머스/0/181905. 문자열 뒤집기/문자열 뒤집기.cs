using System.Text;

public class Solution {
    public string solution(string my_string, int s, int e) {
        // Use StringBuilder for efficient string manipulation
        StringBuilder sb = new StringBuilder();
        
        // Append the front part
        sb.Append(my_string.Substring(0, s));
        
        // Reverse and append the middle part
        for (int i = e; i >= s; i--) {
            sb.Append(my_string[i]);
        }
        
        // Append the back part
        sb.Append(my_string.Substring(e + 1));
        
        return sb.ToString();
    }
}