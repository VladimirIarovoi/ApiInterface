import * as React from "react";
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Button, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import SingleBootcamp from "./SingleBootcamp";

const CareerItems = ({careers, key}) => {
    return(
        <ScrollView style = {styles.careersContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style = {styles.careersContainerInner}>
                {careers.map((item, id) => {
                    return(
                        <TouchableOpacity  key = {id} style={styles.careersItem}>
                            <Text style={styles.careersText}>{item}</Text>
                        </TouchableOpacity>
                    )})}
            </View>
    </ScrollView>
    )
}

const ListItem = ({ name, price, description, careers, key ,navigation}) => {
    return(
        <View style={styles.listItemContainer}>
            <Image source={require('../../assets/preview.jpg')} style={styles.listItemImage}/>
            <View style={styles.listItemContent}>
                <View style={styles.priceAndHeading}>
                    <Text style={styles.listItemHeading}>{name}</Text>
                    <Text style={styles.listItemPrice}>{price}$</Text>
                </View>
                <Text style={styles.listItemText}>
                    {description}
                </Text>
            </View>
            <CareerItems careers = {careers} key = {key}/>
            <Button title={'Details'} style = {styles.careersButton} onPress={() => {
                navigation.navigate("SingleBootcamp")
            }} />
        </View>
)}

    function Bootcamps({navigation}){
    const [apiData, setApiData] = useState()
        useEffect(() => {
            async function getApiData () {
                await fetch('https://devcamper-crud-api.herokuapp.com/api/v1/bootcamps/')
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setApiData(data)
                    });
            }
            getApiData();
        },[])


    if (apiData !== undefined) {
        console.log("Bootcmps loaded")
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatListStyle}
                    data={apiData.data}
                    renderItem={({item}) => (
                        <ListItem
                        name={item.name}
                        price={item.averageCost}
                        description={item.description}
                        id={item._id}
                        careers={item.careers}
                        navigation={navigation}
                        />
                        )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    } else console.log("Bootcamps data unloaded")
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9",
    },
    flatListStyle: {
        width:'100%'
    },
    listItemContainer: {
        display: "flex",
        width:'90%',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        marginHorizontal:20
    },
    listItemImage: {
        resizeMode: "cover",
        height: 220,
        width: "100%",
    },
    listItemContent:{
        width:'100%',
        paddingLeft: 20,
        marginTop: 20
    },
    priceAndHeading:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    listItemHeading:{
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        lineHeight: 23,
        color: '#373737'
    },
    listItemPrice:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 19,
        textAlign: 'right',
        color: '#32BF40'
    },
    listItemText:{
        fontWeight: 'normal',
        width: '100%',
        color: '#373737',
        marginVertical: 20,
        paddingRight: 20,
        lineHeight: 18,
    },
    careersContainer:{
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    careersContainerInner:{
        flexDirection: "row",
        marginRight:25
    },
    careersItem:{
        backgroundColor: '#3090D6',
        paddingHorizontal: 13,
        paddingVertical: 6,
        borderRadius: 50,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginHorizontal: 5
    },
    careersText: {
        color: 'white',
        fontWeight: '600'
    },
    careersButton:{
        backgroundColor: '#373737',
        marginRight: 20
        }
})

export default Bootcamps;
