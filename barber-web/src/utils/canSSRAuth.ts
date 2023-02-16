import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from '../services/errors/AuthTokenError'

// Função para pagina que só users logados podem ter acesso

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies['@barber.token']  //Se ele tiver token ele deixa prosseguir

    if (!token) {  //Se o usuário não tiver token
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }
    try {
      return await fn(ctx);
    } catch (err) {  //Deslogando o usuário
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, '@barber.token', { path: '/' })

        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      }

    }

  }
}