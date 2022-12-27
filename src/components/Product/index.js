import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Product({ data, addToCart}) {
 return (
   <View style={styles.container}>
    <View>
    <Image style={styles.img}
            resizeMode="cover"
            source={{ uri: data.img }}
          />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
      <Text style={styles.buttonText}>Comprar</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 2,
    borderColor: '#c997c6',
    borderRadius: 6,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title:{
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  price:{
    fontWeight: 'bold'
  },

  buttonText:{
    fontSize: 18,
    color: '#fff',
  },

  buttonAdd:{
    
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    backgroundColor: '#c997c6',
    marginRight: 15,
  },

  img: {
    width: 110,
    height: 100,
    marginRight: 10,
    borderRadius: 10
  },
})