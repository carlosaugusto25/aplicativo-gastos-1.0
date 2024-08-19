import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.COLORS.PRIMARY,
                tabBarInactiveTintColor: theme.COLORS.DISABLED,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 68,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >
            <Screen 
                name='Transações' 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name='swap-horiz' size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name='Cadastro' 
                component={Register}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name='library-add' size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name='Relatórios' 
                component={Register}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name='bar-chart' size={size} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}