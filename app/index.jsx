import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

function index({}) {
  return (
    <View
      // style={styles.container}
      className="flex-1 items-center justify-center bg-white"
    >
      <Text className="text-2xl font-pblack"> Aora!</Text>
      <Link
        href="/profile"
        // style={styles.link}
        className="text-blue-950 underline"
      >
        go to profile
      </Link>
    </View>
  );
}

export default index;
