/* eslint-disable react/no-array-index-key */
import { Header } from '@/components/header'
import { TeslaBankIcon } from '@/components/icons/tesla-bank'
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  Clock4,
  CreditCard,
  DollarSign,
  Gift,
  Heart,
  MessageCircleQuestion,
  MousePointer2,
  Percent,
  Shield,
  ShoppingCart,
  Smartphone,
  Smile,
} from 'lucide-react'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { SiApple, SiGoogleplay } from 'react-icons/si'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh w-full bg-white">
      <Header />

      <div className="py-20">
        <div className="mx-auto flex w-11/12 max-w-7xl gap-16">
          <div className="grow text-2xl font-medium">
            <h1 className="mb-6 text-7xl font-semibold">
              <span className="text-tesla">TeslaBank</span>
              <br />
              seu banco digital
            </h1>
            <p>
              Com TeslaBank, você pode realizar transferências bancárias com
              zero taxa e pagar suas contas.
            </p>
            <ul className="my-10 grid grid-cols-2 gap-6">
              {[
                'Transferência instantânea',
                'Sem taxas absurdas',
                'Pagamentos em todo o mundo',
                '100% pensando em você',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <div className="bg-tesla/5 rounded-full p-2">
                    <Check className="text-tesla/70 size-5" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="bg-tesla hover:bg-tesla/85 flex w-xs items-center justify-center gap-2 rounded p-4 text-xl font-semibold text-white transition hover:scale-105"
              >
                Abrir uma conta
                <ArrowRight />
              </a>
              <a href="#">
                <SiApple className="text-tesla hover:text-tesla/85 size-15 transition hover:scale-110" />
              </a>
              <a href="#">
                <SiGoogleplay className="text-tesla hover:text-tesla/85 size-15 transition hover:scale-110" />
              </a>
            </div>
          </div>
          <img src="/assets/cards.svg" alt="cards.svg" />
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto grid w-11/12 max-w-7xl grid-cols-2">
          <div className="relative mx-auto size-fit">
            <img
              src="/assets/smartphone.png"
              alt="smartphone.png"
              className="mx-auto"
            />
            <div className="animate-float-4 absolute -top-4 left-1/5 rounded-lg bg-white">
              <div className="bg-tesla/5 rounded-lg p-4">
                <CircleCheckBig className="text-tesla/70 size-12" />
              </div>
            </div>
            <div className="animate-float-3 absolute top-1/2 -right-4 -translate-y-1/2 rounded-lg bg-white">
              <div className="bg-tesla/5 rounded-lg p-4">
                <MousePointer2 className="text-tesla/70 size-12" />
              </div>
            </div>
            <div className="animate-float-5 absolute bottom-1/4 -left-6 rounded-lg bg-white">
              <div className="bg-tesla/5 rounded-lg p-4">
                <Heart className="text-tesla/70 size-12" />
              </div>
            </div>
          </div>
          <div className="w-lg">
            <h2 className="text-4xl font-semibold">
              Abra sua conta <span className="text-tesla">gratuita!</span>
            </h2>
            <p className="mt-10 text-xl font-medium">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
              TEDs e transferências para todos os bancos sem pagar nada.
            </p>
            <ul className="bg-tesla/5 space-y-1">
              {[
                {
                  title: 'Seu dinheiro rendendo mais',
                  description:
                    'Rendem mais que a poupança e você resgata quando quiser.',
                  Icon: DollarSign,
                },
                {
                  title: 'Conta digital 100% grátis',
                  description:
                    'Transferências, boletos de depósito e outros serviços gratuitos.',
                  Icon: Smartphone,
                },
                {
                  title: 'Cartão sem anuidade',
                  description:
                    'Conta digital com cartão de crédito sem anuidade e sem complicação.',
                  Icon: Smile,
                },
              ].map(item => (
                <li
                  key={item.title}
                  className="flex items-center gap-6 bg-white py-15"
                >
                  <div className="bg-tesla/5 rounded-lg p-4">
                    <item.Icon className="text-tesla/70 size-7" />
                  </div>
                  <div>
                    <p className="mb-1 text-xl font-semibold">{item.title}</p>
                    <p className="font-medium">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-tesla/10 py-20">
        <div className="mx-auto w-11/12 max-w-7xl">
          <h3 className="text-tesla mb-1.5 text-xl font-medium italic">
            #INOVAÇÃO
          </h3>
          <h2 className="text-4xl font-semibold">
            Quais as vantagens de usar{' '}
            <span className="text-tesla">TeslaBank</span>?
          </h2>
          <ul className="mt-10 grid grid-cols-4 gap-6">
            {[
              {
                Icon: CreditCard,
                title: 'Cartão TeslaBank',
                description:
                  'O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia.',
              },
              {
                Icon: ShoppingCart,
                title: 'Investimentos',
                description:
                  'O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento e cashback.',
              },
              {
                Icon: Clock4,
                title: 'Atendimento 24h',
                description:
                  'No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana.',
              },
              null,
              null,
              {
                Icon: Shield,
                title: 'Segurança',
                description:
                  'Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado.',
              },
              {
                Icon: Percent,
                title: 'Sem taxas',
                description:
                  'Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas.',
              },
              {
                Icon: Gift,
                title: 'Receba prêmios',
                description:
                  'Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios.',
              },
            ].map((item, i) =>
              item ? (
                <li key={i} className="space-y-4 rounded-lg bg-white p-6">
                  <item.Icon className="text-tesla/70 size-7" />
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="font-medium">{item.description}</p>
                </li>
              ) : (
                <span key={i} />
              )
            )}
          </ul>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto w-11/12 max-w-7xl">
          <h3 className="text-tesla mb-1.5 text-xl font-medium italic">
            #DEPOIMENTOS
          </h3>
          <h2 className="text-4xl font-semibold">
            <span className="text-tesla">TeslaBank</span> fora das telinhas:
            <br />
          </h2>
          <p className="text-4xl font-medium">
            Veja o que estão falando sobre nós.
          </p>
          <ul className="mt-16 grid grid-cols-3 gap-16">
            {[
              {
                name: 'Nikola Tesla',
                testimonial:
                  'Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis.',
              },
              {
                name: 'Steve Jobs',
                testimonial:
                  'O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas.',
              },
              {
                name: 'Alan Turing',
                testimonial:
                  'Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas.',
              },
            ].map((item, i) => (
              <li key={i} className="space-y-4">
                <p className="border-tesla border-l-3 pl-3 text-xl font-semibold">
                  {item.name}
                </p>
                <p className="font-medium">{item.testimonial}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto w-11/12 max-w-7xl text-center">
          <h3 className="text-tesla mb-1.5 text-xl font-medium italic">
            #CARTÕES
          </h3>
          <h2 className="mx-auto mb-6 max-w-sm text-4xl font-semibold">
            <span className="text-tesla">TeslaBank</span> tem o cartão perfeito
            para você!
            <br />
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium">
            Encontre o cartão perfeito para suas necessidades financeiras. Seja
            para viagens ou compras do dia a dia, temos uma opção que se adapta
            a você.
          </p>
          <img
            src="/assets/cards-2.svg"
            alt="cards-2.svg"
            className="mx-auto my-10"
          />
          <div className="mx-auto grid w-fit grid-cols-2 gap-3">
            <a
              href="#"
              className="border-tesla flex items-center justify-center rounded-lg border-2 px-6 py-3 text-lg font-semibold"
            >
              Comparar cartões
            </a>
            <a
              href="#"
              className="bg-tesla flex items-center justify-center rounded-lg p-4 px-6 py-3 text-lg font-semibold text-white"
            >
              Abrir uma conta
            </a>
          </div>
        </div>
      </div>

      <div className="bg-tesla/10 py-20">
        <div className="mx-auto grid w-11/12 max-w-7xl grid-cols-2">
          <div className="max-w-lg">
            <h3 className="text-tesla mb-1.5 text-xl font-medium italic">
              #EXPERIÊNCIA
            </h3>
            <h2 className="text-4xl font-semibold">
              Uma nova experiência em{' '}
              <span className="text-tesla">serviços financeiros</span>.
            </h2>
            <p className="mt-6 text-lg font-medium">
              Nossa abordagem inovadora e personalizada oferece uma experiência
              única para atender às suas necessidades.
            </p>
            <div className="mt-10 grid w-fit grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center gap-4 rounded-lg bg-zinc-700 px-7 py-2 text-white"
              >
                <SiApple className="size-9" />
                <div>
                  <p className="text-base font-medium">Download via</p>
                  <p className="text-lg font-semibold">AppleStore</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 rounded-lg bg-zinc-700 px-7 py-2 text-white"
              >
                <SiGoogleplay className="size-9" />
                <div>
                  <p className="text-base font-medium">Download via</p>
                  <p className="text-lg font-semibold">GooglePlay</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="bg-tesla mx-auto flex size-80 items-center justify-center rounded-4xl">
              <TeslaBankIcon className="animate-grow size-36 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="mx-auto w-11/12 max-w-xl text-center">
          <h3 className="text-tesla mb-1.5 text-xl font-medium italic">
            #AJUDA
          </h3>
          <h2 className="text-4xl font-semibold">
            Ficou alguma <span className="text-tesla">dúvida</span>?
          </h2>
          <p className="m-4 text-lg font-medium">
            Confira nossa lista de perguntas frequentes que recebemos.
          </p>
          <ul className="bg-tesla/10 space-y-0.5">
            {[
              'Como posso abrir uma conta bancária?',
              'Qual é o meu saldo atual?',
              'Como faço para transferir dinheiro para outra conta?',
            ].map((question, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [isOpen, setIsOpen] = useState(false)

              return (
                <li key={i} data-active={isOpen} className="bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 py-10"
                    onClick={() => setIsOpen(state => !state)}
                  >
                    <div className="bg-tesla/5 rounded-lg p-4">
                      <MessageCircleQuestion className="text-tesla/70 size-7" />
                    </div>
                    <p className="grow text-left text-lg font-medium">
                      {question}
                    </p>
                    <IoChevronDown
                      data-active={isOpen}
                      className="size-5 shrink-0 transition data-active:rotate-180"
                    />
                  </button>
                  <p
                    data-active={isOpen}
                    className="h-0 overflow-hidden text-left text-lg font-medium opacity-0 transition-all data-active:h-32 data-active:opacity-100"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, voluptatibus.
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
