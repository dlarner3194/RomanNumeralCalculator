using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romannumercalculator.business.Interfaces
{
  public interface ICalculations
  {
    int Add(string a, string b);
    int Subtract(int a, int b);
    int Divide(int a, int b);
    int Multiply(int a, int b);
    void Clear();
    void ClearAll();
    int Equals();
  }
}
