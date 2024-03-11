using System;

public class Example
{
    public static void Main()
    {
        Console.Clear();
        string input = Console.ReadLine();
        string result = "";

        foreach (char c in input)
        {
            if (char.IsUpper(c))
            {
                result += char.ToLower(c);
            }
            else if (char.IsLower(c))
            {
                result += char.ToUpper(c);
            }
            else
            {
                result += c;
            }
        }
        Console.WriteLine(result);
    }
}