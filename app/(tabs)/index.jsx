import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Svg, Path, Circle, Line } from 'react-native-svg';
import { router } from 'expo-router';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { signUp } from '../../components/firebase/auth';

export default function Component() {
  const [Switch, setSwitch] = useState(true)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPass, setRegisterPass] = useState('')
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsgRegister, setErrorMsgRegister] = useState('');

  const handleConfirm = (date) => {
  setDatePickerVisibility(false);
  setSelectedDate(date);
  };
  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };
  return (
   <>

   {Switch? <Container>
      <Card>
        <IconContainer>
          <LeafIcon width={48} height={48} fill="#2ecc71" />
          <Title>EcoRangers</Title>
          <Subtitle>Donate and help plant trees for a sustainable future.</Subtitle>
        </IconContainer>
        <Form>
          <InputWrapper>
            <Label>Email</Label>
            <StyledTextInput onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <StyledTextInput onChange={(e)=>setPass(e.target.value)} value={pass} placeholder="Password" secureTextEntry />
          </InputWrapper>
          <StyledButton onPress={()=>router.push('/otro/map')} >
            <ButtonText >Sign In</ButtonText>
          </StyledButton>
        </Form>
        <Footer>
          <StyledLink onPress={()=>{
            setSwitch(!Switch)}}>Create an account</StyledLink>
          <SocialIcons>
            <IconButton><ChromeIcon width={20} height={20} /></IconButton>
            <IconButton><FacebookIcon width={20} height={20} /></IconButton>
            <IconButton><TwitterIcon width={20} height={20} /></IconButton>
          </SocialIcons>
        </Footer>
      </Card>
    </Container>
    :
    <Container>
      <Card>
        <IconContainer>
          <LeafIcon width={48} height={48} fill="#2ecc71" />
          <Title>EcoRangers</Title>
          <Subtitle>Donate and help plant trees for a sustainable future.</Subtitle>
        </IconContainer>
        <Form>
          <InputWrapper>
            <Label>Username</Label>
            <StyledTextInput placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <StyledTextInput  onChange={(e)=>setRegisterEmail(e.target.value)} value={registerEmail} placeholder="m@example.com" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <StyledTextInput onChange={(e)=>setRegisterPass(e.target.value)} value={registerPass} placeholder="Password" secureTextEntry />
          </InputWrapper>
          <InputWrapper>
            <Label>Verify Password</Label>
            <StyledTextInput placeholder="Password" secureTextEntry />
          </InputWrapper>
          <InputWrapper>
            <Label >Fecha de nacinamiento</Label>
            <StyledTextInput onPress={()=>{ setDatePickerVisibility(true)}}
            placeholder="01-08-1999"
            placeholderTextColor="gray"
            editable={false}
            value={selectedDate ? selectedDate.toDateString() : ''}/>
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
          </InputWrapper>
          <StyledButton onPress={async()=>{
            setSwitch(!Switch)
                }} >
            <ButtonText >Create Account</ButtonText>
          </StyledButton>
        </Form>
        <Footer>
          <StyledLink onPress={()=>{setSwitch(!Switch)}} >Sign In</StyledLink>
          <SocialIcons>
            <IconButton><ChromeIcon width={20} height={20} /></IconButton>
            <IconButton><FacebookIcon width={20} height={20} /></IconButton>
            <IconButton><TwitterIcon width={20} height={20} /></IconButton>
          </SocialIcons>
        </Footer>
      </Card>
    </Container>
    }
    </>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Card = styled.View`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const IconContainer = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2ecc71;
  margin-top: 8px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: gray;
  text-align: center;
`;

const Form = styled.View`
  margin-bottom: 16px;
`;

const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: gray;
  margin-bottom: 4px;
`;

const StyledTextInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const StyledButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #2ecc71;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.Text`
  color: #2ecc71;
  font-size: 14px;
`;

const SocialIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.TouchableOpacity`
  margin-left: 8px;
`;

// SVG Icons
const LeafIcon = (props) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <Path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Svg>
);

const ChromeIcon = (props) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="10" />
    <Circle cx="12" cy="12" r="4" />
    <Line x1="21.17" y1="8" x2="12" y2="8" />
    <Line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <Line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </Svg>
);

const FacebookIcon = (props) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Svg>
);

const TwitterIcon = (props) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </Svg>
);
