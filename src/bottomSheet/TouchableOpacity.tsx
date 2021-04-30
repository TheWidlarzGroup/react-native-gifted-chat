import React, { forwardRef, ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { TouchableOpacity as BottomSheetTouchableOpacity } from '@gorhom/bottom-sheet'
import { useModalContext } from './ModalContext'

type Props = {
  children: ReactNode
} & TouchableOpacityProps

function CustomTouchableOpacity(
  props: Props,
  ref: React.Ref<TouchableOpacity>,
) {
  const displayInModal = useModalContext()
  return displayInModal ? (
    <BottomSheetTouchableOpacity {...props} ref={ref} />
  ) : (
    <TouchableOpacity {...props} ref={ref} />
  )
}

export default forwardRef(CustomTouchableOpacity)
