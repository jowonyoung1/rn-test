import {NavigationContainer} from '@react-navigation/native';
import ScreenStackNavigator from './src/navigation/ScreenStackNavigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <ScreenStackNavigator />
    </NavigationContainer>
  );
};

export default App;
