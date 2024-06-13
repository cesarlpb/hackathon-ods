import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Svg, Path, Circle, Line } from 'react-native-svg';



const YourTrees = () => {
  return (
    <Container >
      <Card>
        <IconContainer>
          <LeafIcon width={48} height={48} fill="#2ecc71" />
          <Title>EcoRangers</Title>
          <Subtitle>View the trees you have helped plant for a sustainable future.</Subtitle>
        </IconContainer>
        <Grid>
          <TreeDonationSection>
            <SectionTitle>Your Tree Donations</SectionTitle>
            <TreeList>
              <TreeItem>
                <TreeDetails>
                  <LeafIcon width={24} height={24} fill="#2ecc71" />
                  <TreeText>Tree #1</TreeText>
                </TreeDetails>
                <TreeSerial>Serial Code: 123456</TreeSerial>
              </TreeItem>
              <TreeItem>
                <TreeDetails>
                  <LeafIcon width={24} height={24} fill="#2ecc71" />
                  <TreeText>Tree #2</TreeText>
                </TreeDetails>
                <TreeSerial>Serial Code: 789012</TreeSerial>
              </TreeItem>
              <TreeItem>
                <TreeDetails>
                  <LeafIcon width={24} height={24} fill="#2ecc71" />
                  <TreeText>Tree #3</TreeText>
                </TreeDetails>
                <TreeSerial>Serial Code: 345678</TreeSerial>
              </TreeItem>
            </TreeList>
          </TreeDonationSection>
          <DonateSection>
            <SectionTitle>Donate More Trees</SectionTitle>
            <StyledButton>
              <ButtonText>Donate Trees</ButtonText>
            </StyledButton>
          </DonateSection>
        </Grid>
        <Footer>
          <SocialIcons>
            <IconButton>
              <ChromeIcon width={20} height={20} />
            </IconButton>
            <IconButton>
              <FacebookIcon width={20} height={20} />
            </IconButton>
            <IconButton>
              <TwitterIcon width={20} height={20} />
            </IconButton>
          </SocialIcons>
        </Footer>
      </Card>
    </Container>
  );
}
 
export default YourTrees;



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

const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TreeDonationSection = styled.View`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const DonateSection = styled.View`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TreeList = styled.View`
  margin-top: 8px;
`;

const TreeItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const TreeDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TreeText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;

const TreeSerial = styled.Text`
  font-size: 14px;
  color: gray;
`;

const StyledButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #2ecc71;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

const SocialIcons = styled.View`
  flex-direction: row;
`;

const IconButton = styled.TouchableOpacity`
  margin: 0 8px;
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
