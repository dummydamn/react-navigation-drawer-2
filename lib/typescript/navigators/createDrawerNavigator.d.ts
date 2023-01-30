import * as React from 'react';
import { NavigationRouteConfigMap, CreateNavigatorConfig, NavigationRoute } from 'react-navigation';
import { NavigationDrawerOptions, NavigationDrawerProp, NavigationDrawerConfig, NavigationDrawerRouterConfig, DrawerContentComponentProps } from '../types';
declare const DrawerNavigator: (routeConfigs: NavigationRouteConfigMap<NavigationDrawerOptions, NavigationDrawerProp<NavigationRoute, any>>, config?: CreateNavigatorConfig<NavigationDrawerConfig, NavigationDrawerRouterConfig, NavigationDrawerOptions, NavigationDrawerProp<NavigationRoute, any>>) => import("react-navigation").NavigationNavigator<{
    drawerBackgroundColor?: string | undefined;
    overlayColor?: string | undefined;
    minSwipeDistance?: number | undefined;
    drawerPosition: "left" | "right";
    drawerType: "front" | "back" | "slide";
    drawerLockMode?: "unlocked" | "locked-closed" | "locked-open" | undefined;
    keyboardDismissMode?: "none" | "on-drag" | undefined;
    drawerWidth: number | (() => number);
    statusBarAnimation: "slide" | "none" | "fade";
    onDrawerClose?: (() => void) | undefined;
    onDrawerOpen?: (() => void) | undefined;
    sceneContainerStyle?: import("react-native").ViewStyle | undefined;
    edgeWidth: number;
    hideStatusBar?: boolean | undefined;
    style?: import("react-native").ViewStyle | undefined;
    gestureHandlerProps?: (import("react-native-gesture-handler").PanGestureHandlerProps & React.RefAttributes<any>) | React.PropsWithChildren<import("react-native-gesture-handler").PanGestureHandlerProps & React.RefAttributes<any>> | undefined;
} & {
    contentComponent?: React.ComponentClass<DrawerContentComponentProps, any> | React.FunctionComponent<DrawerContentComponentProps> | undefined;
    unmountInactiveRoutes?: boolean | undefined;
    contentOptions?: object | undefined;
}, import("react-navigation").NavigationProp<import("react-navigation").NavigationState>>;
export default DrawerNavigator;
