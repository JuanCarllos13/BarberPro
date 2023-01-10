import { prisma } from "@prisma/client";
import prismaClient from "../../prisma";

interface HairCut {
  user_id: string;
  name: string;
  price: number;
}

class CreateHairCutService {
  async execute({ name, price, user_id }: HairCut) {
    if (!name || !price) {
      throw new Error("Error");
    }

    // verificar quantos modelos esse usuário já tem cadastrado
    const myHaircut = await prismaClient.haircut.count({
      where: {
        user_id: user_id,
      },
    });

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    // Podemos criar nossa validações ou limite

    if (myHaircut >= 3 && user.subscriptions?.status !== "active") {
      throw new Error("Not authorized");
    }



    // const hairCutAlready = await prismaClient.haircut.findFirst({
    //   where: {
    //     name: name,
    //   },
    // });

    // if (hairCutAlready) {
    //   throw new Error("haircut already exists");
    // }

    const haircut = await prismaClient.haircut.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });

    return haircut;
  }
}

export { CreateHairCutService };
