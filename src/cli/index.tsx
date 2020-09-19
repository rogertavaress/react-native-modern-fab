import React, { useCallback, useMemo, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  Items: {
    position: 'absolute',
    bottom: 150,
    right: 20,
  },
  Item: {
    marginBottom: 10,
  },
  FABButton: {
    position: 'absolute',
    width: 58,
    height: 58,
    bottom: 60,
    right: 20,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface FABProps {
  list: { key: string; component: JSX.Element }[];
  icon?: JSX.Element;
  backgroundColor?: string;
  buttonColor?: string;
}

export interface ItemList {
  key: string;
  component: JSX.Element;
  animated: Animated.Value;
}

const FAB: React.FC<FABProps> = ({ list, icon, backgroundColor = '#ffffffee', buttonColor = '#ff8a62' }) => {
  const [isShow, setIsShow] = useState(false);

  const itemsData = useMemo(() => {
    const itemsList: ItemList[] = [];
    list.forEach((item) =>
      itemsList.push({
        key: item.key,
        component: item.component,
        animated: new Animated.Value(0),
      }),
    );
    return itemsList;
  }, [list]);

  const showItems = useCallback(() => {
    setIsShow(true);
    const itemsAnimated: Animated.CompositeAnimation[] = [];
    itemsData.forEach((element) => {
      itemsAnimated.push(
        Animated.timing(element.animated, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
      );
    });

    Animated.sequence(itemsAnimated.reverse()).start();
  }, [itemsData]);

  const closeItems = useCallback(() => {
    const itemsAnimated: Animated.CompositeAnimation[] = [];
    itemsData.forEach((element) => {
      itemsAnimated.push(
        Animated.timing(element.animated, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      );
    });

    Animated.sequence(itemsAnimated).start(() => {
      setIsShow(false);
    });
  }, [itemsData]);

  const handlePressButton = useCallback(() => {
    if (isShow) {
      closeItems();
    } else {
      showItems();
    }
  }, [closeItems, showItems, isShow]);

  return (
    <>
      {isShow && (
        <View style={{ ...styles.Container, backgroundColor: backgroundColor }}>
          <View style={styles.Items}>
            {itemsData.map(({ key, component, animated }) => (
              <Animated.View key={key} style={{ ...styles.Item, opacity: animated }}>
                {component}
              </Animated.View>
            ))}
          </View>
        </View>
      )}
      <RectButton onPress={handlePressButton} style={{ ...styles.FABButton, backgroundColor: buttonColor }}>
        <View>
          {/* <Feather name={icon} size={30} color={iconColor} /> */}
          {icon}
        </View>
      </RectButton>
    </>
  );
};

export default FAB;
