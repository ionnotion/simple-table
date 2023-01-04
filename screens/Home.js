import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	Text,
	View,
	TextInput,
	StyleSheet,
} from "react-native";
import { DataTable, Searchbar } from "react-native-paper";
import { Tablerows } from "../components/TableRows";

export const Home = () => {
	const nav = useNavigation();
	const [dummyData, setData] = useState([]);
	const [filteredDummy, setFilteredDummy] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const searchChangeHandler = (a) => {
		setSearchQuery({});
		const filtered = dummyData.filter((el) =>
			el.materialName.toLowerCase().includes(a.toLowerCase())
		);
		if (a) {
			setSearchQuery(a);
			setFilteredDummy([...filtered]);
		} else {
			setSearchQuery("");
			setFilteredDummy([]);
		}
	};

	const dataGetter = () => {
		return searchQuery ? filteredDummy : dummyData;
	};

	useEffect(() => {
		let temp = require("../dummy.json");
		setData([...temp]);
	}, []);

	// useEffect(()=>{
	// 	console.log(searchQuery)
	// },[searchQuery])
	return (
		<View style={{ justifyContent: "center" }}>
			<Text>This is Home</Text>
			<Button onPress={() => nav.navigate("Details")} title="Details" />
			<View style={styles.searchOptions}>
				<Text>Quick Search:</Text>
				<Searchbar
					style={{marginVertical:10}}
					placeholder="title..."
					onChangeText={searchChangeHandler}
				></Searchbar>
				<Button onPress={() => nav.navigate("Search")} title="Advanced Search" />
			</View>
			<ScrollView horizontal={true}>
				{dataGetter().length ? (
					<DataTable style={{ marginTop: 10, marginBottom: 110}}>
						<DataTable.Header>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 50 }}>
								No.
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 100 }}>
								Nama Material
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 80 }}>
								Tipe
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 95 }}>
								Lokasi
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 60 }}>
								Kondisi
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 60 }}>
								Block
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 60 }}>
								No. Slab
							</DataTable.Title>
							<DataTable.Title textStyle={styles.tableText} style={{ ...styles.tableHeader, width: 75 }}>
								Ukuran
							</DataTable.Title>
						</DataTable.Header>

						<FlatList
							data={dataGetter()}
							keyExtractor={(item) => item.id}
							renderItem={({ item }, index) => {
								return <Tablerows item={item} key={index} />;
							}}
						/>
					</DataTable>
				) : (
					<Text>No Match...</Text>
				)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	tableHeader: {
		paddingHorizontal: 5,
		borderColor: "#1A120B",
		borderWidth: 1,
		justifyContent: "center",
	},
	tableText : {
		color: "#1A120B"
	},
	searchOptions: {
		marginVertical: 5,
		marginHorizontal: 5,
		padding: 8,
		borderBottomColor: "#000000",
		borderWidth: 1,
	},
});
