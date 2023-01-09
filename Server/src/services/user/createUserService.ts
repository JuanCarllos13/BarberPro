interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password}: UserRequest) {
    console.log(email)
    console.log(name)
    return { ok: true };
  }
}

export { CreateUserService };
