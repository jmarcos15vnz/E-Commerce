using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ECommerce.WEB.Models;
using ECommerce.Service.DTOs;
using Newtonsoft.Json;

namespace ECommerce.WEB.Controllers
{
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetUserLogin([FromBody] dynamic postData)
        {
            return buildJsonResult(postData);
        }
    }
}
