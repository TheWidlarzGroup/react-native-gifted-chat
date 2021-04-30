import React, { createContext, FC, ReactNode, useContext } from 'react'

interface Props {
  children: ReactNode
  displayInModal: boolean
}

type ModalContextValue = boolean

const ModalContext = createContext<ModalContextValue>(false)

export const ModalProvider: FC<Props> = ({ children, displayInModal }) => {
  return (
    <ModalContext.Provider value={displayInModal}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (context) {
    return context
  }

  throw Error('Use this hook in Provider scope')
}
