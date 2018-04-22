using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace romannumercalculator.business.Models
{
  public class RomanNumeralDictionary
  {
    public Dictionary<string, int> romanNumerals = new Dictionary<string, int>()
    {
      { "I", 1 },
      { "II", 2 },
      { "III", 3 },
      { "IV", 4 },
      { "V", 5 },
      { "VI", 6 },
      { "VII", 7 },
      { "VIII", 8 },
      { "IX", 9 },
      { "X", 10 },
      { "XL", 40 },
      { "XC", 90 },
      { "C", 100 },
      { "D", 500 },
      { "M", 1000 }
    };
  }
}
