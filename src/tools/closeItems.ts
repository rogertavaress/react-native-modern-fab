import { Animated } from 'react-native';

const closeItems = (items: any[], callback: () => void): void => {
  const itemsAnimated: Animated.CompositeAnimation[] = [];
  items.forEach((element) => {
    itemsAnimated.push(
      Animated.timing(element.animated, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    );
  });

  Animated.sequence(itemsAnimated).start(() => {
    callback();
  });
};

export default closeItems;
