namespace Backend.Contracts;
using Backend.Models;
using System.Threading.Tasks;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllAsync();
    Task<User> GetByIdAsync(int userId);
    Task<User> getUser(int id);
    Task<User> AddAsync(User user);
    Task<User> UpdateAsync(int id,User user);
    Task<int> DeleteAsync(int id);
}