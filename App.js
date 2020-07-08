import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
   StyleSheet,
   Text, 
   View,
    SafeAreaView,
    Image,
    ScrollView
   } from 'react-native';
import { Feather } from '@expo/vector-icons';

const feedData =[
  {
    id: 1,
    name: 'Gia_dinh_nha_Sau',
    image: require('./assets/instagram/1.JPG'),
    likeCount: 20,
    avatar: require('./assets/avatar/1.jpg')
   
  },
  {
    id: 2,
    name: 'Ong_ngoai_of_Sau',
    image: require('./assets/instagram/2.JPG'),
    likeCount: 20,
    avatar: require('./assets/avatar/1.jpg')
  }
  
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 27}}/>
        <Image
          source={{
          uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
        }}
        style={styles.imageHeader}
        resizeMode="contain"
        />
        <Feather style={styles.iconHeader} name="inbox" size={27} color="black"/>
      </View>
      

      {/* // Danh sach cac list anh */}
      <ScrollView>
        {
          feedData.map(feed => {
            return (
              <View style={styles.Item} key={feed.id}>
                <View style={styles.avatarWrapper}>
                  {/* //avatar */}
                  <Image
                  source={feed.avatar}
                  styles ={styles.avatarImage}
                  resizeMode ="contain"
                  />
                  {/* // Name of person */}

                  <Text style={styles.posterName}>
                    {feed.name}

                  </Text>
                </View>

                {/* //Display Image */}

                <View style={styles.imageWrapper}>
                  <Image
                    source={feed.image}
                    style={styles.imagePoster}
                    resizeMode="contain"
                  />
                </View>


               {/* Status */}
                <View style={styles.wrapperStatus}>
                    <Feather
                      style={styles.itemStatus}
                      name="heart"
                      size={27}
                      color="red"
                      onPress={()=> alert("Liked")}
                    />
                    <Feather
                      style={styles.itemStatus}
                      name="message"
                      size={27}
                      color="green"
                      onPress={()=>alert("Commnented")}
                    />
                    <Feather
                      style={styles.itemStatus}
                      name="shared"
                      size={27}
                      color="green"
                      onPress={()=>alert("Shared")}
                    />
                </View>

              {/* likeCount */}
              <View style={styles.like}>
                <Feather
                  style ={styles.itemStatus}
                  name="like"
                  size={27}
                  backgroundColor="black"
                />
                <Text style={styles.likeCount}>{feed.likeCount}likes</Text>
              </View>
                
              </View>
            )
          })
        }
      </ScrollView>

  </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  imageHeader: {
    flex: 1,
    width: null,
    height: 44,
    marginLeft: 20,
  },
  iconHeader: {
    marginRight: 10,
  },
  
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 12,
  },

avatarImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
posterName:{
  marginLeft: 12,
  fontSize: 15,
  fontWeight: '500',
},

imageWrapper: {
  flex: 1,
  width: null,
  height: null,
},

imagePoster: {
  flex: 1,
  width: null,
  height: null,
},

wrapperStatus: {
  flexDirection: 'row'
},
itemStatus: {
  marginLeft: 10
},

like: {
  flexDirection: 'row',
  alignItems: 'center',
  
},
likeCount: {
  fontSize: 20
}
});
