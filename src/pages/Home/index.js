import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles'

export default function Home () {
  return (
    <SafeAreaView>
      <S.Container>
        <S.Title>HOME</S.Title>
        <S.Row>
          <S.Text>Swipe To Right</S.Text>
          <MaterialIcons name="arrow-forward" size={15} color="#FFFFFF" />
        </S.Row>
      </S.Container>
    </SafeAreaView>
  )
}
