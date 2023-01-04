import { DataTable } from "react-native-paper";
import { StyleSheet } from "react-native";

export const Tablerows = ({item}) => {
	return (
		<DataTable.Row style={{borderWidth:0}}>
            <DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 50}} >{item.id}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 100}} >{item.materialName}</DataTable.Cell>
			<DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 80}} >{item.materialType}</DataTable.Cell>
			<DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 95}} >{item.location}</DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 60}} >{item.condition}</DataTable.Cell>
			<DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 60}} >{item.block}</DataTable.Cell>
			<DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 60}} >{item.slabNumber}</DataTable.Cell>
			<DataTable.Cell textStyle={styles.tableText} style={{...styles.tableCell, width: 75}} >{item.size}</DataTable.Cell>
		</DataTable.Row>
	)
};

const styles = StyleSheet.create({
	tableCell: {flex:1,paddingHorizontal:5,borderColor:"#1A120B",borderWidth:0.5,justifyContent:"center",color:"black"},
	tableText:{color:"#1A120B"}
});