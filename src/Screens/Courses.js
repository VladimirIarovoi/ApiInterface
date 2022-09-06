import * as React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
import {useEffect, useState} from "react";

const ListItem = ({ name, description, key, bootcamp, weeks, tuition, minSkill }) => {

    return(
        <View style={styles.listItemContainer} key = {key}>
            <View style={styles.listItemContent}>
                <Text style={styles.listItemSubHeading}>{bootcamp}</Text>
                <Text style={styles.listItemHeading}>{name}</Text>
                <Text style={styles.listItemText}>
                    {description}
                </Text>
                <View style={styles.listItemDescription}>
                    <View style={styles.listItemDescriptionLine}>
                        <Text style={styles.DescriptionLineHeading}>Weeks:</Text>
                        <Text style={styles.DescriptionLineContent}>{weeks}</Text>
                    </View>
                    <View style={styles.listItemDescriptionLine}>
                        <Text style={styles.DescriptionLineHeading}>Tuition:</Text>
                        <Text style={styles.DescriptionLineContent}>{tuition}</Text>
                    </View>
                    <View style={styles.listItemDescriptionLine}>
                        <Text style={styles.DescriptionLineHeading}>Minimal skill:</Text>
                        <Text style={styles.DescriptionLineContent}>{minSkill}</Text>
                    </View>
                </View>
            </View>
        </View>
    )}

function Courses(){
    const [apiData, setApiData] = useState()
    async function getApiData () {
        await fetch('https://devcamper-crud-api.herokuapp.com/api/v1/courses/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    setApiData(data)
            });
    }
    getApiData()
    if (apiData !== undefined) {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatListStyle}
                    data={apiData.data}
                    renderItem={({item}) => (
                        <ListItem
                            name={item.title}
                            description={item.description}
                            bootcamp={item.bootcamp.name}
                            weeks={item.weeks}
                            tuition={item.tuition}
                            minSkill={item.minimumSkill}
                        />
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        )
    } else {
        console.log("Courses data unloaded")
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },
    listItemContent:{
        width:'100%',
        paddingLeft: 20,
        marginTop: 20
    },
    flatListStyle: {
        width:'100%'
    },
    listItemContainer: {
        display: "flex",
        width:'90%',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        marginHorizontal:20,
        paddingBottom: 20
    },
    listItemText:{
        fontWeight: 'normal',
        width: '100%',
        lineHeight: 18,
        color: '#373737',
        marginVertical: 20,
        paddingRight: 20
    },
    listItemHeading:{
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color: '#373737',
        textTransform: "uppercase",
    },
    listItemSubHeading:{
        fontWeight: '400',
        color: '#737373',
        marginBottom: 6
    },
    listItemDescription:{
        paddingRight:20,
        width: '100%',
        marginTop: 10
    },
    listItemDescriptionLine:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10
    },
    DescriptionLineHeading:{
        lineHeight:14,
        color: '#373737',
        fontWeight: "400",
    },
    DescriptionLineContent:{
        lineHeight:14,
        color: '#373737',
        fontWeight: "700",
        textAlign: 'right'
    }
})

export default Courses;
