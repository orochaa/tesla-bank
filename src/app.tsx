import { Header } from '@/components/header'
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  DollarSign,
  Heart,
  MousePointer2,
  Smartphone,
  Smile,
} from 'lucide-react'
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
                    <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
                    <p className="font-medium">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
