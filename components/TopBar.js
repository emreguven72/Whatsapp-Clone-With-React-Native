import React from 'react';
import styled from 'styled-components';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '../config/Config';

const Container = styled.View({
    width: '100%',
    height: '12%',
    backgroundColor: colors.topBarColor,
})

const WhatsappText = styled.Text({
    color: '#FFF',
    fontSize: 24,
    paddingTop: 5,
    paddingLeft: 15,
})

const NavBarPages = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
})

const NavBarPageText = styled.Text({
    color: '#FFF',
    fontSize: 14,
})

const PageStatusBar = styled.View({
    height: 3,
    width: 100,
    marginStart: -10,
    backgroundColor: '#FFF',
    marginTop: 5,
})

const TopBar = () => {
    return(
        <Container>
            <WhatsappText>Whatsapp</WhatsappText>
            <NavBarPages>
                <View>
                    <TouchableOpacity>
                        <NavBarPageText>SOHBETLER</NavBarPageText>
                    </TouchableOpacity>
                    <PageStatusBar/>
                </View>
                <TouchableOpacity>
                    <NavBarPageText>DURUM</NavBarPageText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <NavBarPageText>ARAMALAR</NavBarPageText>
                </TouchableOpacity>
            </NavBarPages>
        </Container>
    )
}

export default TopBar;