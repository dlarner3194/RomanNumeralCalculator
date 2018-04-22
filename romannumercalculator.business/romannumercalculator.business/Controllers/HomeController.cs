using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using romannumercalculator.business.Interfaces;
using romannumercalculator.business.Models;

namespace romannumercalculator.business.Controllers
{
  public class HomeController : Controller
  {
    private readonly ICalculations _calculations;

    public HomeController(ICalculations calculations)
    {
      _calculations = calculations;
    }

    public IActionResult Index()
    {
      return View();
    }

    public IActionResult Add(string a, string b)
    {
      var calc = _calculations;

      calc.Add(a, b);

      return View();
    }
  }
}
