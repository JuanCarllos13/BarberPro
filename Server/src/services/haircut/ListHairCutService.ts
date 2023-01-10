import prismaClient from "../../prisma";

interface HairCutRequest {
  user_id: string;
  status: boolean | string;
}

class ListHairCutService {
  async execute({ status, user_id }: HairCutRequest) {
    const haircut = await prismaClient.haircut.findMany({
      where: {
        user_id: user_id,
        status: status === "true" ? true : false,
      },
    });

    return haircut
  }
}

export { ListHairCutService };
