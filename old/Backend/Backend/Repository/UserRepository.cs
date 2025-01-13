using System.Data;
using Backend.Contracts;
using Backend.Data;
using Backend.Models;
using Dapper;
using System.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
namespace Backend.Repository;
public class UserRepository : IUserRepository
{
    private readonly DapperContext _context;
    public UserRepository(DapperContext context)
    {
        _context = context;
    }
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        Console.WriteLine("GetAllAsync");
        string query = @"SELECT * FROM Users";
        using (var connection = _context.GetConnection())
        {
            var users = await connection.QueryAsync<User>(query);
            return users.ToList();
        }
    }
    public async Task<User> getUser(int id)
    {
        var query = @"SELECT * FROM Users WHERE Id = @Id";
        using (var connection = _context.GetConnection())
        {
            var users = await connection.QuerySingleOrDefaultAsync<User>(query, new { Id = id });
            return users;
        }
    }
    public async Task<User> GetByIdAsync(int id)
    {
        string query = @"SELECT * FROM Users WHERE Id = @Id";

        using (var connection = _context.GetConnection())
        {
            return await connection.QuerySingleOrDefaultAsync<User>(query, new { Id = id });
        }
    }
    public async Task<User> AddAsync(User user)
    {
        var hasher = new PasswordHasher<User>();
        user.Password = hasher.HashPassword(user, user.Password);
        string query = @"INSERT INTO Users (Username, Email,Password) VALUES (@Username, @Email, @Password)" + "; SELECT CAST(SCOPE_IDENTITY() as int);";
        var param = new DynamicParameters();
        param.Add("Username", user.Username, DbType.String);
        param.Add("Email", user.Email, DbType.String);
        param.Add("Password", user.Password, DbType.String);
        using (var connection = _context.GetConnection())
        { 
            var result = await connection.QuerySingleAsync<int>(query, param);
            return new User{
                Id = result,
                Username = user.Username,
                Email = user.Email,
                Password = user.Password,
                createdAt = DateTime.Now
            };
        }
    }
    public async Task<User> UpdateAsync(int id,User user)
    {
        var hasher = new PasswordHasher<User>();
        user.Password = hasher.HashPassword(user, user.Password);
        string query = @"UPDATE Users SET Username = @Username, Email = @Email, Password = @Password WHERE Id = @Id";
        var param = new DynamicParameters();
        param.Add("Id", id, DbType.String);
        param.Add("Username", user.Username, DbType.String);
        param.Add("Email", user.Email, DbType.String);
        param.Add("Password", user.Password, DbType.String);
        using (var connection = _context.GetConnection())
        { 
            await connection.ExecuteAsync(query, param);
            return new User{
               Id = id,
               Username = user.Username,
               Email = user.Email,
               Password = user.Password,
               createdAt = user.createdAt
            };
        }
    }
    public async Task<int> DeleteAsync(int id)
    {
        var query = @"DELETE FROM Users WHERE Id = @id";
        using (var connection = _context.GetConnection())
        {
            var r = await connection.ExecuteAsync(query, new { Id = id });
            return r;
        }
    }
}