import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import Home from "../components/Home";
import ReviewDetails from "../components/ReviewDetails";

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#d3d1d1'}
    }
});
export default createAppContainer(HomeStack);