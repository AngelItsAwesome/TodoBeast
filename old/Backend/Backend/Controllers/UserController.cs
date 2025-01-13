using Backend.Contracts;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;


[ApiController]
[Route("api/")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        try
        {
            var users = await _userRepository.GetAllAsync();
            return Ok(users);
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }
    [HttpPost]
    public async Task<IActionResult> CreateUser([FromForm] User user)
    {
        try
        {
            user = await _userRepository.AddAsync(user);
            return Ok(user);
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser([FromRoute] int id, [FromForm] User user)
    {
        try
        {
            var u = await _userRepository.getUser(id);
            if (u == null)
            {
                return NotFound();
            }
            User editedUser = await _userRepository.UpdateAsync(id,user);
            return Ok(editedUser);
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser([FromRoute] int id)
    {
        try
        {
            var u = await _userRepository.getUser(id);
            if (u == null)
            {
                return StatusCode(404, $"User NOT FOUND");
            }
            var r = await _userRepository.DeleteAsync(id);
            if (r == 1)
            {
                return Ok("OK DELETED");    
            }
            return StatusCode(500, $"Something went wrong...");
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }
}