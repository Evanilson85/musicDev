import { View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import * as S from './style.tab'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import Animated, { ZoomIn } from 'react-native-reanimated';

export function MyTabBar({ state, descriptors, navigation, position }: MaterialTopTabBarProps) {

  const onPress = ({ key, name, params }: any, index: any) => {
    const isFocused = state.index === index;
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(name, params);
    }
  };

  const onLongPress = ({ key }: any) => {
    navigation.emit({
      type: 'tabLongPress',
      target: key,
    });
  };

  const renderTeste = ({item, index}: any) => {
    const { options } = descriptors[item.key];
    const isFocused = state.index === index;
    const label = options.tabBarLabel ?? options.title ?? item.name;
    return (
      <S.Btn
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={() => onPress(item, index)}
        onLongPress={() => onLongPress(item,)}
      >
        <Animated.Text entering={ZoomIn}>
          <S.Text isFocused={isFocused}>
            { label }
          </S.Text>
        </Animated.Text>
      </S.Btn>
    );
  }

  return (
    <S.Container horizontal={true}> 
      <FlatList 
        data={state.routes}
        renderItem={renderTeste}
        keyExtractor={(_: any, index: any) => index}
        horizontal={true}
      />
    </S.Container>
  );
}



