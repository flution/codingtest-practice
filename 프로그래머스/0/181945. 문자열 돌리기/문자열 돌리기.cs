using System;

public class Example
{
    public static void Main()
    {
        String s;

        Console.Clear();
        s = Console.ReadLine();

       RotateString(s);
    }

    public static void RotateString(string str)
    {
        for (int i = 0; i < str.Length; i++)
        {
            Console.WriteLine(str[i]);
        }
    }
}