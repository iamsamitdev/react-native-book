import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'
import { cartContext } from './tab-cart-context'

export default function TabCart({ navigation }) {
    let [cart, setCart] = React.useContext(cartContext)

    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>Cart Screen {'\n'}</Text>
            <Button title="Add Cart" onPress={
                () => {
                    if (cart === 0 || cart === undefined) {
                        setCart(1)
                    } else if (cart >= 1) {
                        setCart(++cart)
                    }
                }
            } />
            <Text></Text>
            <Button title="Delete Cart" onPress={
                () => {
                    if (!cart) {  //cart === undefined
                        return
                    }

                    cart--
                    if (cart > 0) {
                        setCart(cart)
                    } else {
                        setCart(undefined)
                    }
                }
            } />

        </View>
    )
}

const styles = StyleSheet.create({

})
