import { Animated } from 'react-native';

const showItems = (items: any[], callback: () => void): void => {
  // setIsShow(true);
  callback();
  const itemsAnimated: Animated.CompositeAnimation[] = [];
  items.forEach((element) => {
    itemsAnimated.push(
      Animated.timing(element.animated, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    );
  });

  Animated.sequence(itemsAnimated.reverse()).start();
};

export default showItems;
