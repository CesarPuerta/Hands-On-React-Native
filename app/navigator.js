import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'home/views/usersDetails';
import UserDetailsScreen from 'home/components/userDetails';
import Camera from 'home/components/shared/camera';

const stackNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    UserDetails: { screen: UserDetailsScreen },
    Camera: { screen: Camera }
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none'
  }
);

export default createAppContainer(stackNavigator);
