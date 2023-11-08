import { Navigation } from "../components/Navigation";
import { AddButton } from "../components/AddButton";
import { Link } from "expo-router";
import { Tasks } from "../components/Tasks";
import { useTasks } from "../hooks/useTasks";

export const Landing = () => {
  const { tasks, tasksLoading } = useTasks();

  return (
    <>
      <Navigation />
      {!tasksLoading && <Tasks data={tasks} />}

      <Link href={"/createtask"}>
        <AddButton text={"add task"} />
      </Link>
    </>
  );
};
