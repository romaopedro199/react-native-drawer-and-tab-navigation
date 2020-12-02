import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import * as S from './styles'

import NavButton from './NavButton'

export default function TabMenu (props) {
  return (
    <S.Row>
      <NavButton
        icon='apps'
        text='Home'
        onPress={() => props.navigation.navigate('Home')}
      />
      <NavButton
        icon='settings'
        text='Settings'
        onPress={() => props.navigation.navigate('Settings')}
      />
    </S.Row>
  )
}
