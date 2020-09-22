# react-native-modern-fab

react-native-modern-fab is a button component built with Typescript for React Native CLI and React Native Expo.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install) to install **react-native-modern-fab**.

```bash
npm i react-native-modern-fab
```
or
```bash
yarn add react-native-modern-fab
```

## Post-installation (Dependencies)

You need to install **react-native-gesture-handler** to use react-native-modern-fab.

```bash
npm i react-native-gesture-handler
```
or
```bash
yarn add react-native-gesture-handler
```

## Usage

```tsx
import React, { useMemo } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import FAB from 'react-native-modern-fab';

import plusImg from './assets/plus.png';

const App = () => {
  const list = useMemo(()=>([
    {key: '1', component: <Text>Item 1</Text>},
    {key: '2', component: <Text>Item 2</Text>},
    {key: '3', component: <Text>Item 3</Text>},
    {key: '4', component: <Text>Item 4</Text>},
  ]),[]);

  return (
    <>
      <View style={{flex: 1}}>
        <Image source={backgroundImg} />
      </View>
      <FAB list={list} icon={<Image source={plusImg} />} />} />
    </>
  );
};

export default App;
```

## Properties

| Prop                  | Description                                              | Type                                      | Required | Default     |
| --------------------- | -------------------------------------------------------- | ----------------------------------------- | -------- | ----------- |
| **`list`**            | List of items to be shown.                               | { key: string; component: JSX.Element }[] | true     | _None_      |
| **`icon`**            | Icon inside the floating button.                         | JSX.Element                               | false    | _None_      |
| **`backgroundColor`** | Background color that appears when you press the button. | string                                    | false    | `#ffffffee` |
| **`buttonColor`**     | floating button color.                                   | string                                    | false    | `#ff8a62`   |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/rogertavaress/react-native-modern-fab/blob/master/LICENSE)
