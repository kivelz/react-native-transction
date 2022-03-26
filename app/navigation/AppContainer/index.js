import {AppDrawerNavigator} from './app/view/navigation';
import {createAppContainer, createSwitchNavigator} from '@react-navigation';


const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: {
        screen: AppDrawerNavigator,
    },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer