import React from 'react';
import { Animated } from 'react-native';
interface FABProps {
    list: {
        key: string;
        component: JSX.Element;
    }[];
    icon?: JSX.Element;
    backgroundColor?: string;
    buttonColor?: string;
}
export interface ItemList {
    key: string;
    component: JSX.Element;
    animated: Animated.Value;
}
declare const FAB: React.FC<FABProps>;
export default FAB;
