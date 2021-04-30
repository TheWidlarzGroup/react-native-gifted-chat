import React, { forwardRef } from 'react'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { FlatList, FlatListProps } from 'react-native'
import { useModalContext } from './ModalContext'

function CustomFlatList<T>(
  props: FlatListProps<T>,
  ref: React.Ref<FlatList<T>>,
) {
  const displayInModal = useModalContext()

  return displayInModal ? (
    <BottomSheetFlatList {...props} ref={ref as any} />
  ) : (
    <FlatList {...props} ref={ref} />
  )
}

export default forwardRef(CustomFlatList)
