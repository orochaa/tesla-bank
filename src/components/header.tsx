/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/jsx-no-bind */
import { TeslaBankIcon } from '@/components/icons/tesla-bank'
import { useWindowSize } from '@/hooks/use-window-size'
import Hamburger from 'hamburger-react'
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

export function Header(): React.JSX.Element {
  const [header, setHeader] = useState<HeaderLabel>()
  const [isHeaderOptionsVisible, setIsHeaderOptionsVisible] = useState(false)
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)
  const { windowWidth } = useWindowSize()

  const headerController = useAnimation()

  return (
    <div
      className="sticky top-0 left-0 z-30"
      onPointerLeave={() => {
        headerController
          .start('hide')
          .then(async () => headerController.start('shrink'))
          .catch(console.error)
        setIsHeaderOptionsVisible(false)
      }}
    >
      <div className="relative">
        {windowWidth > 1024 ? (
          <>
            <div className="bg-tesla relative z-30 font-semibold text-white">
              <div className="mx-auto flex w-11/12 max-w-7xl justify-between">
                <div className="flex gap-10">
                  <TeslaBankIcon className="my-auto size-10" />
                  <div className="flex gap-6">
                    {headerLabels.map(_header => {
                      const isActive =
                        isHeaderOptionsVisible &&
                        _header.label === header?.label

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
              className="absolute left-0 h-96 w-full"
              animate={headerController}
              initial="shrink"
              variants={{
                shrink: {
                  top: 0,
                  opacity: 0,
                },
                hide: {
                  opacity: 0,
                  visibility: 'hidden',
                },
                show: {
                  top: 56,
                  opacity: 1,
                  visibility: 'visible',
                  transition: {
                    ease: 'easeInOut',
                    duration: 0.3,
                  },
                },
              }}
            >
              <div className="relative z-30 size-full rounded-b-4xl bg-white">
                <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-2 gap-10 py-10">
                  <div>
                    <div className="bg-tesla mx-auto flex h-40 w-full items-center justify-center rounded-4xl p-6">
                      <TeslaBankIcon className="size-28 text-white" />
                    </div>
                    <h2 className="mt-6 mb-2 text-2xl font-semibold">
                      TeslaBank
                    </h2>
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
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <div className="bg-tesla relative z-30 text-white">
              <div className="mx-auto flex w-11/12 max-w-7xl justify-between py-1">
                <TeslaBankIcon className="my-auto size-10" />
                <Hamburger
                  toggled={isHeaderOpen}
                  toggle={setIsHeaderOpen}
                  direction="left"
                />
              </div>
            </div>

            {!!isHeaderOpen && (
              <motion.div
                className="absolute top-full left-0 w-full"
                initial={{
                  y: -25,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                <div className="relative z-30 rounded-b-4xl border-b border-zinc-400 bg-white">
                  <div className="h-96 overflow-y-auto">
                    <div className="mx-auto w-11/12 py-10">
                      <ul className="space-y-2">
                        {headerLabels.map(({ label, options }) => (
                          <li key={label}>
                            <p className="text-tesla text-xl font-semibold">
                              {label}
                            </p>
                            <ul>
                              {options.map((option, i) => (
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
                                    className="block py-3 text-lg font-medium transition-colors active:text-black/70"
                                  >
                                    {option}
                                  </a>
                                </motion.li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
