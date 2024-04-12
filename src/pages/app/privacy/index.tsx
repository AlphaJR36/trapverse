import { Layout } from '@/pages/_layouts/app'

export function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Política de Privacidade
        </h1>
        <div className="prose dark:prose-dark">
          <p>
            Esta Política de Privacidade descreve como as suas informações
            pessoais são coletadas, usadas e compartilhadas quando você visita
            ou faz uma compra em nosso site.
          </p>
          <h2>Coleta e Uso de Informações Pessoais</h2>
          <p>
            Quando você visita o nosso site, automaticamente coletamos
            determinadas informações sobre o seu dispositivo, incluindo
            informações sobre o seu navegador da web, endereço IP, fuso horário
            e alguns dos cookies que estão instalados no seu dispositivo. Além
            disso, à medida que você navega pelo site, coletamos informações
            sobre as páginas da web ou produtos individuais que você visualiza,
            quais sites ou termos de pesquisa o encaminharam ao site e
            informações sobre como você interage com o site. Chamamos essas
            informações coletadas automaticamente de &quot;Informações do
            Dispositivo&quot;.
          </p>
          <p>
            Utilizamos as Informações do Dispositivo que coletamos para nos
            ajudar a melhorar e otimizar nosso site (por exemplo, gerando
            análises sobre como nossos clientes navegam e interagem com o site e
            avaliando o sucesso de nossas campanhas de marketing).
          </p>
          <p>
            Além disso, quando você faz uma compra ou tenta fazer uma compra por
            meio do site, coletamos algumas informações suas, incluindo seu
            nome, endereço de cobrança, endereço de entrega, informações de
            pagamento (incluindo números de cartão de crédito, endereço de
            e-mail e número de telefone). Chamamos essas informações de
            &quot;Informações do Pedido&quot;.
          </p>
        </div>
      </div>
    </Layout>
  )
}
