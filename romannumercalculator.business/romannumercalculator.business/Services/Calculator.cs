using romannumercalculator.business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romannumercalculator.business.Services
{
  public class Calculator : ICalculations
  {
    public int Add(string a, string b)
    {
      return Convert.ToInt32(a) + Convert.ToInt32(b);
    }

    public void Clear()
    {
      throw new NotImplementedException();
    }

    public void ClearAll()
    {
      throw new NotImplementedException();
    }

    public int Divide(int a, int b)
    {
      throw new NotImplementedException();
    }

    public int Equals()
    {
      throw new NotImplementedException();
    }

    public int Multiply(int a, int b)
    {
      throw new NotImplementedException();
    }

    public int Subtract(int a, int b)
    {
      throw new NotImplementedException();
    }
  }
}
