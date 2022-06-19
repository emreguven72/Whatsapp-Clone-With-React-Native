import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const Container = styled.TouchableOpacity({
    marginTop: 5,
    paddingTop: 15,
    flexDirection: 'row',
  })

const ProfilePhoto = styled.Image({
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 1000,
    marginLeft: 10,
    marginVertical: 'auto',
})

const Name = styled.Text({
    fontSize:18,
    color: '#000',
    marginTop: -2,
})

const Message = styled.Text({
    fontSize:14,
    color: 'black',
    marginTop: 6,
    opacity: 0.6
})

const Time = styled.Text({
    fontSize: 12,
    marginTop: 3,
    marginRight: 10
})

const Chat = ({picPath, name, message, time, onPress}) => {
    return(
        <Container onPress={onPress}>
            <ProfilePhoto source={picPath}/>
            <View style={{ marginLeft:20, flex: 1 }}>
                <Name>{name}</Name>
                <Message>{message}</Message>
            </View>
            <Time>{time}</Time>
        </Container>
    )
}

export default Chat;