/* eslint-disable */
import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Dimensions, Animated, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// import { Feather } from '@expo/vector-icons';
var styles = StyleSheet.create({
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
var FAB = function (_a) {
    var list = _a.list, icon = _a.icon, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? '#ffffffee' : _b, _c = _a.buttonColor, buttonColor = _c === void 0 ? '#ff8a62' : _c;
    var _d = useState(false), isShow = _d[0], setIsShow = _d[1];
    var itemsData = useMemo(function () {
        var itemsList = [];
        list.forEach(function (item) {
            return itemsList.push({
                key: item.key,
                component: item.component,
                animated: new Animated.Value(0),
            });
        });
        return itemsList;
    }, [list]);
    var showItems = useCallback(function () {
        setIsShow(true);
        var itemsAnimated = [];
        itemsData.forEach(function (element) {
            itemsAnimated.push(Animated.timing(element.animated, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
            }));
        });
        Animated.sequence(itemsAnimated.reverse()).start();
    }, [itemsData]);
    var closeItems = useCallback(function () {
        var itemsAnimated = [];
        itemsData.forEach(function (element) {
            itemsAnimated.push(Animated.timing(element.animated, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true,
            }));
        });
        Animated.sequence(itemsAnimated).start(function () {
            setIsShow(false);
        });
    }, [itemsData]);
    var handlePressButton = useCallback(function () {
        if (isShow) {
            closeItems();
        }
        else {
            showItems();
        }
    }, [closeItems, showItems, isShow]);
    return (React.createElement(React.Fragment, null,
        isShow && (React.createElement(View, { style: __assign(__assign({}, styles.Container), { backgroundColor: backgroundColor }) },
            React.createElement(View, { style: styles.Items }, itemsData.map(function (_a) {
                var key = _a.key, component = _a.component, animated = _a.animated;
                return (React.createElement(Animated.View, { key: key, style: __assign(__assign({}, styles.Item), { opacity: animated }) }, component));
            })))),
        React.createElement(RectButton, { onPress: handlePressButton, style: __assign(__assign({}, styles.FABButton), { backgroundColor: buttonColor }) },
            React.createElement(View, null, icon))));
};

export default FAB;
