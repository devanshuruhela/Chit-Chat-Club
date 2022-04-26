class UserDto
{
  id;
  phone;
  name;
  avatar;
  createdAt;
  activated;

  constructor(user)
  {
    this.id = user._id;
    this.phone = user.phone;
    this.activated = user.activated;
    this.name = user.name;
    this.avatar = user.avatar?`${process.env.BASE_URL}${user.avatar}`:null;
    this.createdAt = user.createdAt;
  }
}

module.exports = UserDto;