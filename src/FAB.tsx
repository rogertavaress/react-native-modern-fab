import React, { useCallback, useMemo, useState } from 'react';
import { Animated, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import closeItems from './tools/closeItems';
import showItems from './tools/showItems';

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

  const handleShowItems = useCallback(() => {
    showItems(itemsData, () => {
      setIsShow(true);
    });
  }, [itemsData]);

  const handleCloseItems = useCallback(() => {
    closeItems(itemsData, () => {
      setIsShow(false);
    });
  }, [itemsData]);

  const handlePressButton = useCallback(() => {
    if (isShow) {
      handleCloseItems();
    } else {
      handleShowItems();
    }
  }, [handleCloseItems, handleShowItems, isShow]);

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
        <View>{icon}</View>
      </RectButton>
    </>
  );
};

export default FAB;
