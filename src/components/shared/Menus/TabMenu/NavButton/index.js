import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

import * as S from './styles'

export default function NavButton (props) {
  return (
    <S.Column onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={24} color="#44C2E4" />
      <S.Text>{props.text}</S.Text>
    </S.Column>
  )
}
