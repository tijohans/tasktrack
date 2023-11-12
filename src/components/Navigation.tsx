import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../themes/colors";
import { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

interface NavigationProps {
  back?: boolean;
  title?: string;
  hamburger?: boolean;
}

export const Navigation: FC<NavigationProps> = ({
  back,
  title,
  hamburger = true,
}) => {
  return (
    <View style={styles.navBar}>
      {back && (
        <TouchableOpacity onPress={router.back}>
          <Feather name="log-in" size={32} style={styles.back} />
        </TouchableOpacity>
      )}
      {!back && <Text style={styles.logo}>tasktrack</Text>}

      {title && <Text style={styles.title}>{title}</Text>}
      {hamburger && <Feather name="align-right" size={32} />}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: colors.primaryPurple,
    fontWeight: "bold",
    fontSize: 24,
  },
  back: {
    transform: [{ scaleX: -1 }],
  },
  title: {
    color: colors.secondaryPurple,
    fontWeight: "bold",
    fontSize: 24,
  },
});
