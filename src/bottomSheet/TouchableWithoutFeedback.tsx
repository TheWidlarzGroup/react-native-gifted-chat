import React, { ReactNode } from 'react'
import { useModalContext } from './ModalContext'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'
import { TouchableWithoutFeedback as BottomSheetTouchableWithoutFeedback } from '@gorhom/bottom-sheet'

type Props = {
  children: ReactNode
} & TouchableWithoutFeedbackProps

const CustomTouchableWithoutFeedback = (props: Props) => {
  const displayInModal = useModalContext()

  return displayInModal ? (
    <BottomSheetTouchableWithoutFeedback {...props} />
  ) : (
    <TouchableWithoutFeedback {...props} />
  )
}

export default CustomTouchableWithoutFeedback
