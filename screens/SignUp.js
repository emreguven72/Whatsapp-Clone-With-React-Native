import React from 'react';
import styled from 'styled-components';
import { colors } from '../config/Config';
import { View, Text } from 'react-native';

const Container = styled.SafeAreaView({
    flex:1,
    backgroundColor: colors.topBarColor,
})

const FormArea = styled.View({
    paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 15
})

const CreateAccountText = styled.Text({
    fontSize:30,
    color: 'white',
    paddingLeft: 24,
})

const PhoneInput = styled.TextInput({
    fontSize: 16,
    borderRadius: 6,
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.SignUpInputColor,
    marginTop: 10,
})

const ButtonArea = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
})

const SignInButton = styled.TouchableOpacity({
    backgroundColor: colors.SigninButtonColor,
    paddingVertical: 16,
    alignItems: 'center',
    width: '49%',
    borderRadius: 6,
})

const SignUpButton = styled.TouchableOpacity({
    backgroundColor: colors.SignUpButtonColor,
    paddingVertical: 16,
    alignItems: 'center',
    width: '49%',
    borderRadius: 6,
})

const ButtonText = styled.Text({
    color: 'white',
})

const SignUp = () => {
    return(
        <Container>
            <CreateAccountText>Create New Account</CreateAccountText>
            <FormArea>
                <PhoneInput placeholder='Enter your phone name' placeholderTextColor='white'/>
                <PhoneInput placeholder='Enter your phone email' placeholderTextColor='white'/>
                <PhoneInput placeholder='Enter your password' placeholderTextColor='white'/>
                <ButtonArea>
                    <SignInButton 
                        onPress={{}}
                        >
                        <ButtonText>Signin</ButtonText>
                    </SignInButton>
                    <SignUpButton
                        onPress={{}}
                        >
                        <ButtonText>Signup</ButtonText>
                    </SignUpButton>
                </ButtonArea>
            </FormArea>
        </Container>
    )
}

export default SignUp;