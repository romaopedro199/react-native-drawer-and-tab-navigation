import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import * as S from './styles'

import NavButton from './NavButton'

export default function DrawerMenu (props) {
  return (
    <S.Column>

      <DrawerContentScrollView>

        <NavButton
          icon='audiotrack'
          text='Music'
          // onPress={() => props.navigation.navigate('Page')}
        />

        <S.Separator />

        <NavButton
          icon='personal-video'
          text='Video'
          // onPress={() => props.navigation.navigate('Page')}
        />

        <S.Separator />

        <NavButton
          icon='notifications-none'
          text='Notifications'
          // onPress={() => props.navigation.navigate('Page')}
        />
        
      </DrawerContentScrollView>

      <S.Footer>
        <NavButton
          icon='info-outline'
          text='About'
          // onPress={() => props.navigation.navigate('Page')}
        />
      </S.Footer>

    </S.Column>
  )
}
