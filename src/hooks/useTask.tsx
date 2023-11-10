import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { TaskType } from "../../types/taskType";
import { router } from "expo-router";

export const useTask = (id: string) => {
  const [task, setTask] = useState<TaskType>();
  const [taskLoading, setTaskLoading] = useState(true);

  const db = SQLite.openDatabase("db.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from tasks where id=?",
        [id],
        (txObj, resultSet) => {
          setTask(resultSet.rows._array[0]);
        },
        (txObj, error) => {
          console.error(error);
        }
      );
    });

    setTaskLoading(false);
  }, []);

  const deleteTask = (id: string) => {
    db.transaction((tx) => {
      tx.executeSql("delete from tasks where id=?", [id]);
    });
  };

  const saveCompletedTask = (id: string, imageLocation: string) => {
    db.transaction((tx) => {
      tx.executeSql(
        "update tasks set imageURI = ?, completed = 1 where id = ?",
        [imageLocation, id]
      );
    });
  };

  return { task, taskLoading, deleteTask, saveCompletedTask };
};
