import { FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import { UserTypeormRepository } from "../../database/typeorm/dt-money/repositories/user.repository";

export class CheckAuthtenticationMiddleware {
  private authRepository: UserTypeormRepository;

  constructor() {
    this.authRepository = new UserTypeormRepository();
  }

  execute = async (request: FastifyRequest) => {
    const authorizationHeader = request.headers?.authorization;

    if (!authorizationHeader) {
      throw new Error("Sem autorização");
    }

    const [, token] = authorizationHeader.split(" ");

    if (!token || token === "") {
      throw new Error("Não possui token");
    }

    const secret = process.env.APP_SECRET_KEY;

    if (!secret) {
      throw new Error("APP_SECRET_KEY nao configurada");
    }

    const { email } = jwt.verify(token, secret) as {
      email: string;
    };

    try {
      const user = await this.authRepository.findByEmail(email);

      request.user = user;
    } catch (error) {
      throw new Error("Falha ao buscar usuário");
    }
  };
}
