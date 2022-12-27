import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'

export default function Home(){
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/products/B75792/FLORATTA-RED_B75792_conceito_.jpg',
      name: "Floratta Red Desodorante",
      price: 107.99
    },
    {
      id: '2',
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/products/B48139/Coffee_Woman_Seduction_Desodorante_Colonia_4.jpg',
      name: "Coffee Woman Seduction",
      price: 174.99
    },
    {
      id: '4',
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/products/B05009/MA-CHERIE-DES-COL-100ml-V6_B05009_cartucho_conceito.jpg',
      name: "Ma Chérie Desodorante Colônia",
      price: 129.99
    },
    {
      id: '5',
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/products/B74103/glamour_secretsblack_B74103_segredinhos.jpg',
      name: "Glamour Secrets Black",
      price: 131.29
    },
    {
      id: '6',
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:eco,w_80/v1/imagens/products/B01004/FLORATTA-DES-COL-MY-BLUE-75ml-B01004_planta_conceito.jpg',
      name: "Floratta My Blue",
      price: 107.59
    },
  ])

  function handleAddCart(item){
    addItemCart(item)
  }

  return(
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.cartContent}>
        <Text style={stlyes.title}>Perfumes femininos</Text>

        <TouchableOpacity 
        style={stlyes.cartButton} 
        onPress={ () => navigation.navigate("Cart")}
        >
          {cart.length >= 1 && (
            <View style={stlyes.dot}>
              <Text style={stlyes.dotText}>
                {cart?.length}
              </Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={stlyes.list}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Product data={item} addToCart={ () => handleAddCart(item) } /> }
      />


    </SafeAreaView>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#b0efef',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText:{
    fontSize: 12,
  }
})