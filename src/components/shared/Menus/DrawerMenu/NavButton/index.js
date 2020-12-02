import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

import * as S from './styles'

export default function NavButton (props) {
  return (
    <S.Row onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={20} color="#44C2E4" />
      <S.Text>{props.text}</S.Text>
    </S.Row>
  )
}
