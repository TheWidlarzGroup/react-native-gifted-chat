import React, { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { TouchableOpacity as BottomSheetTouchableOpacity } from '@gorhom/bottom-sheet'
import { useModalContext } from './ModalContext'

type Props = {
  children: ReactNode
} & TouchableOpacityProps

function CustomTouchableOpacity(props: Props) {
  const displayInModal = useModalContext()
  return displayInModal ? (
    <BottomSheetTouchableOpacity {...props} />
  ) : (
    <TouchableOpacity {...props} />
  )
}

export default CustomTouchableOpacity
