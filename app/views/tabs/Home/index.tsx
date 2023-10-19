import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { getUserName } from "../../../storage/saves";
import { colors } from "../../../constants/Colors";

export default function () {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    getUserName().then(data => {
      data && setUserName(data);
    }).catch(err => {
      console.log(err);
    })
  });

  return (
    <View>
      <Text style={{ color: colors.black }}> Home </Text>
    </View>
  )
}