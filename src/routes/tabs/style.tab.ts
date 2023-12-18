import styled from "styled-components/native";
import { StatusBar } from "react-native";
const heightStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export const Container = styled.View`
  background-color: ${(props: any) => props.theme.colors.screenPage};
  /* background-color: red; */
  height: 50px;
  align-items: center;
  /* padding-top: ${Math.round(heightStatusBar)}px; */
  flex-direction: row;
  padding: 0 20px;
  gap: 30px;
  justify-content: center;
`

export const Btn = styled.TouchableOpacity`
  padding: 10px 0;
  margin: 0 20px;
`

// export const Div = styled.View`
//    padding: 0 20px;
//    margin: 15px 0;
// `

export const DivScroll = styled.ScrollView`
   padding: 0 20px;
   gap: 30px;
`

// export const Scroll = styled.View`
//  padding: 0 20px;
// `

export const Text = styled.Text`
  color: ${(props: any) => props.isFocused ?  props.theme.colors.default : props.theme.colors.grap};
  font-size: ${(props: any) => props.isFocused ? '20px': '15px'};
`