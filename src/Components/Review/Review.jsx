import { StyleSheet, View, Text, Image } from 'react-native';
import Stars from 'react-native-stars';
 

 const Review = ({rate, count}) => {
        const rating = rate % 1 > 0 ? Math.floor(rate) - 0.5 : rate;
        const reviews = count.split(' ')
    return (
        <View style={styles.container} key={count}>
            <Stars
            default={rating}
            count={5}
            half={true}
            spacing={2}
            starSize={5} 
            fullStar={<Image source={require('../../../assets/stars/star.png')} style={styles.star} />}
            emptyStar={<Image source={require('../../../assets/stars/emptyStar.png')} style={styles.star} />}
            halfStar={<Image source={require('../../../assets/stars/halfStar.png')} style={styles.star} />}
            />
            <Text style={styles.count}>({reviews[0]} Reviews)</Text>
        </View>
    )
 }


 
const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
        marginVertical:10
    },
  count:{
    fontSize:10, 
    fontWeight:'500',
    color:'#123'
  },
  star:{
    width:16,
    height:16,
    tintColor:'orange'
  }
});
export default Review;
