using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ECommerce.WEB.Models;
using ECommerce.Service.DTOs;

namespace ECommerce.WEB.Controllers
{
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public JsonResult GetUserLogin([FromBody] dynamic postData)
        {
            ResponseBase response = postData;
            response.Success = true;
            return buildJsonResult(response);
        }
    }
}
