import React from 'react'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { FlatList, FlatListProps } from 'react-native'
import { useModalContext } from './ModalContext'

function CustomFlatList<T>(props: FlatListProps<T>) {
  const displayInModal = useModalContext()

  return displayInModal ? (
    <BottomSheetFlatList {...props} />
  ) : (
    <FlatList {...props} />
  )
}

export default CustomFlatList
