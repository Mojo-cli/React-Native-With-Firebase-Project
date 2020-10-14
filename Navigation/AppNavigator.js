import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';

const AppNavigator = createStackNavigator({
  Data_Entry_Page: Screen1,
  Display_Info:Screen2
});

export default createAppContainer(AppNavigator);
