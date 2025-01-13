using Backend.Data;

namespace Backend.Models;
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime createdAt { get; set; }

    public User()
    {
        createdAt = DateTime.Now;
    }
    
    public User(int id, string username, string email, string password)
    {
        Id = id;
        Username = username;
        Email = email;
        Password = password;
        createdAt = DateTime.Now; // Automatically assign the current date and time
    }
}