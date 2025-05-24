import { ArrowRight, Check } from 'lucide-react'
import { SiApple, SiGoogleplay } from 'react-icons/si'

export function HomeSection(): React.JSX.Element {
  return (
    <div className="py-20">
      <div className="mx-auto flex w-11/12 max-w-7xl gap-16">
        <div className="grow text-2xl font-medium">
          <h1 className="mb-6 text-7xl font-semibold">
            <span className="text-tesla">TeslaBank</span>
            <br />
            seu banco digital
          </h1>
          <p>
            Com TeslaBank, você pode realizar transferências bancárias com zero
            taxa e pagar suas contas.
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
                  <Check className="text-tesla size-5" />
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
  )
}
