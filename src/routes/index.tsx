import { NavigationContainer } from '@react-navigation/native';
import { Header } from '../components/header';
import { ScrollView } from 'react-native';

import Tabs from './tab.routes';

export const Routes = () => {
    return <NavigationContainer >
        <Tabs />
    </NavigationContainer>
}