import React from "react";
import { useTasks } from "../src/hooks/useTasks";
import { Link } from "expo-router";
import { AddButton } from "../src/components/AddButton";
import { Tasks } from "../src/components/Tasks";

function index() {
  const { tasks, tasksLoading } = useTasks();

  return (
    <>
      {/* <Navigation /> */}
      {!tasksLoading && <Tasks data={tasks} />}

      <Link href={"/createtask"}>
        <AddButton text={"add task"} />
      </Link>
    </>
  );
}

export default index;
