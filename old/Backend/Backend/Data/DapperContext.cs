
using System.Data;
using Microsoft.Data.SqlClient;

namespace Backend.Data
{
    public class DapperContext
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public DapperContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        
        public IDbConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
    
}