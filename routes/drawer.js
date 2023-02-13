import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from 'react-navigation';
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";

const RootDrawerNavigator = createDrawerNavigator({
    SignUp: {
        screen: SignUp,
    },
    SignIn: {
        screen: SignIn,
    },
});

export default createAppContainer(RootDrawerNavigator);