import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("email incorrect");
    }

    const userAlready = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    }); // verificando se já existe um email no banco de dados

    if (userAlready) {
      throw new Error("User/email already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return { user };
  }
}

export { CreateUserService };
