// Usuários não logados
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

// Função para pagina que só pode ser acessadas por visitantes

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx)

    //Se o cara tentar acessar a pagina tendo já um login salvo redirecionamos

    if (cookies['@barber.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,

        }
      }
    }

    return await fn(ctx)
  }
}