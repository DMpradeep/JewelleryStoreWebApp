using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using JewelleryStore.Web.Models;

namespace JewelleryStore.Web.Controllers
{
    [Route("api/[controller]")]
    public class ClientConfigController : Controller
    {
        private ClientConfig _clientConfig;
        public ClientConfigController(IOptions<ClientConfig> ClientConfig)
        {
            _clientConfig = ClientConfig.Value;
        }

        [HttpGet]
        public ClientConfig Get()
        {
            return _clientConfig;
        }
    }
}
