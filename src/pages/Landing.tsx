import { StyleSheet, View } from "react-native";
import { Navigation } from "../components/Navigation";
import { Placeholder } from "../components/Placeholder";
import { AddButton } from "../components/AddButton";
import { useState } from "react";
import { Link } from "expo-router";
import { data } from "../../data";
import { Tasks } from "../components/Tasks";

export const Landing = () => {
  return (
    <>
      <Navigation />
      <Tasks data={data} />

      <Link href={"/createtask"}>
        <AddButton text={"add task"} />
      </Link>
    </>
  );
};
