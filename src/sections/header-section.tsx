/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import { TeslaBankIcon } from '@/components/icons/tesla-bank'
import { motion, useAnimation } from 'motion/react'
import { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

interface HeaderLabel {
  label: string
  options: string[]
}

const headerLabels: HeaderLabel[] = [
  {
    label: 'TeslaBank',
    options: [
      'Conta do TeslaBank',
      'Cartão do TeslaBank',
      'Investimentos',
      'Empréstimos',
      'Seguros',
      'OpenFinance',
    ],
  },
  {
    label: 'Sobre nós',
    options: ['Sobre nós', 'Institucional', 'Relacionamento com Investidores'],
  },
  {
    label: 'Segurança',
    options: [
      'Central de Proteção',
      'Canal de Denúncias',
      'Perguntas Frequentes',
    ],
  },
]

export function HeaderSection(): React.JSX.Element {
  const [header, setHeader] = useState<HeaderLabel>()
  const [isHeaderOptionsVisible, setIsHeaderOptionsVisible] = useState(false)
  const headerController = useAnimation()

  return (
    <div
      className="sticky top-0 left-0"
      onPointerLeave={() => {
        headerController
          .start('hide')
          .then(async () => headerController.start('shrink'))
          .catch(console.error)
        setIsHeaderOptionsVisible(false)
      }}
    >
      <div className="relative">
        <div className="bg-tesla relative z-30 font-semibold text-white">
          <div className="mx-auto flex w-11/12 max-w-6xl justify-between">
            <div className="flex gap-10">
              <TeslaBankIcon className="my-auto size-10" />
              <div className="flex gap-6">
                {headerLabels.map(_header => {
                  const isActive =
                    isHeaderOptionsVisible && _header.label === header?.label

                  return (
                    <a
                      key={_header.label}
                      href="#"
                      data-active={isActive}
                      className="relative flex items-center gap-2 py-4 after:absolute after:bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-[width] after:duration-300 data-active:after:w-full"
                      onPointerEnter={() => {
                        setIsHeaderOptionsVisible(true)
                        setHeader(_header)
                        headerController.start('show')
                      }}
                    >
                      {_header.label}
                      <IoChevronDownOutline
                        data-active={isActive}
                        className="transition duration-500 ease-in-out data-active:rotate-180"
                      />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 items-center text-center font-medium">
              <a
                href="#"
                className="rounded p-2 transition-colors hover:text-zinc-100"
              >
                Entrar
              </a>
              <a
                href="#"
                className="text-tesla rounded bg-white p-2 transition-colors hover:bg-zinc-100"
              >
                Abrir Conta
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute left-0 z-10 h-96 w-full rounded-b-4xl bg-slate-100"
          animate={headerController}
          initial="shrink"
          variants={{
            shrink: {
              top: 0,
              opacity: 0,
            },
            hide: {
              opacity: 0,
            },
            show: {
              top: 56,
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                duration: 0.3,
              },
            },
          }}
        >
          <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-2 gap-10 py-10">
            <div>
              <div className="bg-tesla mx-auto flex h-40 w-full items-center justify-center rounded-4xl p-6">
                <TeslaBankIcon className="size-28 text-white" />
              </div>
              <h2 className="mt-6 mb-2 text-2xl font-semibold">TeslaBank</h2>
              <p className="text-lg font-medium">
                Conta digital grátis, cartão internacional e sem anuidade,
                atendimento 24 horas e muito mais.
              </p>
            </div>
            <ul>
              {header?.options.map((option, i) => (
                <motion.li
                  key={option}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                      delay: 0.1 * i,
                    },
                  }}
                >
                  <a
                    href="#"
                    className="hover:text-tesla block p-3 text-lg font-medium transition-colors"
                  >
                    {option}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
