import { Text, TextInput, View, StyleSheet } from "react-native";
import { colors } from "../constants/Colors";

type InputProps = {
	label: string,
	value: string,
	password: boolean,
	placeholder?: string,
	refInput?: TextInput | null,
	action: (text: string) => void
}

export default function Input(props: InputProps) {
	return (
		<View style={[styles.container]}>
			<Text style={[styles.label]} > {props.label} </Text>
			<TextInput
				placeholder={props.placeholder}
				style={[styles.input]}
				value={props.value}
				secureTextEntry={props.password}
				onChangeText={(text) => props.action(text)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({

	container: {
		width: '100%',
		display: "flex",
		flexDirection: 'column',
		alignItems: "flex-start",
		justifyContent: "flex-start"
	},

	label: {
		color: colors.text,
		fontSize: 18,
	},

	input: {
		width: '100%',
		height: 50,
		textAlign: 'left',
		fontSize: 20,
		marginVertical: 20,
		color: colors.buttonPrimary,
		backgroundColor: colors.white,
		borderRadius: 5,
	},
})