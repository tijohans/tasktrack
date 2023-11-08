import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export const useTasks = () => {
  const [tasks, setTasks] = useState<any>();
  const [tasksLoading, setTasksLoading] = useState(true);

  const createTableQuery = `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL, 
        description TEXT, 
        imageURI TEXT, 
        completed INTEGER DEFAULT 0
    );`;

  const db = SQLite.openDatabase("db.db");
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(createTableQuery);
    });

    db.transaction((tx) => {
      //   tx.executeSql(
      //     'insert into tasks (name, description) values ("test name 1", "test description")',
      //     [],
      //     (txObj, resultset) => {},
      //     (txObj, error) => {
      //       console.error(String(error));
      //     }
      //   );

      tx.executeSql(
        "select * from tasks",
        [],
        (_, { rows }) => {
          setTasks(rows._array);
        },
        null
      );
    });

    setTasksLoading(false);
  }, []);

  return { tasks, tasksLoading };
};
