namespace JobSearch.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    [HttpGet(Name = "GetExample")]
    public IActionResult GetExample() => this.Ok();
}
