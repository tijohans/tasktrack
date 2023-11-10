import { useCallback, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { useFocusEffect } from "expo-router";

const createTableQuery = `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL, 
        description TEXT, 
        imageURI TEXT, 
        completed INTEGER DEFAULT 0
    );`;

export const useTasks = () => {
  const [tasks, setTasks] = useState<any>();
  const [completedTasks, setCompletedTasks] = useState<any>();
  const [tasksLoading, setTasksLoading] = useState(true);

  const db = SQLite.openDatabase("db.db");

  useFocusEffect(
    useCallback(() => {
      db.transaction((tx) => {
        tx.executeSql(createTableQuery);
      });

      db.transaction((tx) => {
        tx.executeSql(
          "select * from tasks where completed=0",
          [],
          (_, { rows }) => {
            setTasks(rows._array);
          }
        );
      });

      db.transaction((tx) => {
        tx.executeSql(
          "select * from tasks where completed=1",
          [],
          (_, { rows }) => {
            setCompletedTasks(rows._array);
          }
        );
      });

      setTasksLoading(false);
    }, [])
  );

  const addTask = ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into tasks (name, description) values (?, ?)",
        [name, description],
        (txObj, resultset) => {},
        (txObj, error) => {
          console.error(String(error));
        }
      );
    });
  };

  return { tasks, completedTasks, tasksLoading, addTask };
};
