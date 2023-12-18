links
 
https://dribbble.com/shots/16301898-Music-Player-UI
https://dribbble.com/shots/23212264-Music-Player



api
https://publicapis.dev/category/music
back https://api.vagalume.com.br/docs/ 


{
  "name": "musicapp",
  "version": "1.0.0",
  "scripts": {
    "dev": "npx expo start --dev-client",
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-native-community/viewpager": "^5.0.11",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/material-top-tabs": "^6.6.5",
    "@react-navigation/native": "^6.1.9",
    "@types/styled-components": "^5.1.34",
    "expo": "~49.0.15",
    "expo-asset": "~8.10.1",
    "expo-dev-client": "~2.4.12",
    "expo-image": "~1.3.5",
    "expo-media-library": "~15.4.1",
    "expo-splash-screen": "~0.20.5",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-fs": "^2.20.0",
    "react-native-pager-view": "^6.2.3",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "react-native-tab-view": "^3.5.2",
    "react-native-track-player": "^4.0.1",
    "styled-components": "^6.1.1",
    "typescript": "^4.9.4"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.14",
    "typescript": "^5.1.3"
  },
  "private": true
}



// {state.routes.map((route: any, index: any) => {
//   const { options } = descriptors[route.key];
//   // nome da minha rota        
//   const label = options.tabBarLabel ?? options.title ?? route.name;
//   // compara qual index estou na tela
//   const isFocused = state.index === index;

//   const onPress = () => {
//     const event = navigation.emit({
//       type: 'tabPress',
//       target: route.key,
//       canPreventDefault: true,
//     });

//     if (!isFocused && !event.defaultPrevented) {
//       navigation.navigate(route.name, route.params);
//     }
//   };

//   const onLongPress = () => {
//     navigation.emit({
//       type: 'tabLongPress',
//       target: route.key,
//     });
//     const teste = navigation.isFocused()
//     console.log(teste)
//   };

//   return (
//     <S.Btn
//       accessibilityRole="button"
//       accessibilityState={isFocused ? { selected: true } : {}}
//       accessibilityLabel={options.tabBarAccessibilityLabel}
//       testID={options.tabBarTestID}
//       onPress={onPress}
//       onLongPress={onLongPress}
//       key={Math.round(index)}
//     >
//           <Animated.Text entering={ZoomIn}>
//         <S.Text isFocused={isFocused}>
//               {label}
//         </S.Text>
//           </Animated.Text>
//     </S.Btn>
//   );
// })}