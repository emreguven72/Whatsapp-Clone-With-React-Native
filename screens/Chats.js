import React from 'react';
import styled from 'styled-components';
import { StatusBar, Button } from 'react-native';
import TopBar from '../components/TopBar';
import Chat from '../components/Chat';
import { colors } from '../config/Config';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.grayBackground,
})

const Chats = () => {
  return(
    <Container>
      <StatusBar backgroundColor={colors.topBarColor}/>
      <TopBar/>
      <Chat
        picPath={require('../Images/sam6.png')}
        name='Sam'
        message='Hi Emre, i am back.'
        time='21.45'
      />
      <Chat
        picPath={require('../Images/abim.jpg')}
        name='Abim'
        message='Naber Emre, ne var ne yok?'
        time='18.15'
      />
      <Chat
        picPath={require('../Images/BilMuh.jpg')}
        name='Bilgisayar Mühendisliği 3. Sınıf'
        message='Ödevi yapan atsın!!!'
        time='07.06'
      />
      <Chat
        picPath={require('../Images/evsizler.jpg')}
        name='Evsizler'
        message='Hüseyin: Pc Aldim.'
        time='Dün'
      />
    </Container>
  )
}

export default Chats;asda