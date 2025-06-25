// C# Version: Compatible with C# 7.0 and later
// Description: Simple console application to calculate the factorial of a non-negative integer
// Features:
// - Input validation
// - Recursive factorial function
// - Safe parsing with TryParse
// - Proper naming conventions and formatting

using System;

namespace FactorialApp
{
    class Program
    {
        // Main method: Entry point of the program
        static void Main(string[] args)
        {
            Console.WriteLine("Programa Factorial");

            // Prompt the user to enter a number
            Console.Write("Introduce o número a calcular: ");

            // Try to parse input safely as an integer
            if (int.TryParse(Console.ReadLine(), out int numero) && numero >= 0)
            {
                // Call the recursive factorial method
                int resultado = Factorial(numero);

                // Display the result to the user
                Console.WriteLine($"Resultado: {resultado}");
            }
            else
            {
                // If the input is not valid, display a message
                Console.WriteLine("Por favor, introduz um número inteiro válido e não negativo.");
            }

            // Wait for the user to press Enter before closing
            Console.WriteLine("Fin do Programa");
        }

        // Recursive method to calculate factorial
        // Base case: factorial(0) = 1, factorial(1) = 1
        // Recursive case: factorial(n) = n * factorial(n - 1)
        static int Factorial(int numero)
        {
            if (numero <= 1)
                return 1;

            return numero * Factorial(numero - 1);
        }
    }
}
