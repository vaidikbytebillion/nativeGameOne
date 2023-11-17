import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

export default function FancyCard() {
  const [data, setData] = useState<any>("");

  const getApiData = async () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.image}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>
      <View style={styles.cardBody}></View>
      {data ? (
        <View >
        <ScrollView horizontal={true}>
          {
            
            data.map((value :any,index :number)=>{
              return (
                <View  style={[styles.card, styles.cardElevated]}>
                  <Image style={styles.image} source={{
                    uri:value.thumbnail
                  }}/>
                  <Text>{value.title}</Text>
                </View>
              )
            })
          }
          </ScrollView>  
        </View>
      ) : (
        <View>
          <Text>hello</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  cardElevated: {},
  card: {
    height: 210,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 6,
    backgroundColor: "grey",
    elevation:6,
    margin:8
  },
  image: {
    height: 100,
    width: 150,
    borderRadius: 6,
  },
  cardBody: {},
});
