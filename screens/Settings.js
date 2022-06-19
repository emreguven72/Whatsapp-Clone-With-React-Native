import React from 'react';
import { colors } from '../config/Config';
import styled from 'styled-components';

const Container = styled.View({
    flex: 1,
    backgroundColor: colors.grayBackground,
})

const Setting = styled.TouchableOpacity({
    width: '100%',
})

const SettingText = styled.Text({
    fontSize: 24,
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
})

const Seperator = styled.View({
    height: 1,
    backgroundColor: 'black',
})

const LogoutFunc = () => {
    alert('You have successfuly logged out.')
}

const Settings = () => {
    return(
        <Container>
            <Setting>
                <SettingText>Profile</SettingText>
            </Setting>
            <Seperator/>
            <Setting>
                <SettingText>Reset Password</SettingText>
            </Setting>
            <Seperator/>
            <Setting>
                <SettingText>Change Username</SettingText>
            </Setting>
            <Seperator/>
            <Setting>
                <SettingText>Add Friends</SettingText>
            </Setting>
            <Seperator/>
            <Setting onPress={LogoutFunc}>
                <SettingText>Logout</SettingText>
            </Setting>
            <Seperator/>
        </Container>
    )
}

export default Settings;