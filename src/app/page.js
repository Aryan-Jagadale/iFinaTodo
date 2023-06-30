"use client";
import { useReducer, useState } from "react";
import HomeComp from "./components/Hero";
import LowerComp from "./components/LowerComp";
import MiddleComp from "./components/Features";
import Context from "./context/Context";
import { initialState, reducer } from "./context/Reducer";
import HomeTodo from "./components/ToDo/HomeTodo";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    if (!task) {
      return alert("Empty task!");
    }

    if (e.keyCode === 13 && e.keyCode !== 8) {
      if (task === " ") {
        return alert("Task is empty!");
      } else if (task) {
        let found = state.tasks.some((obj) => {
          if (obj.task.toString() === task.toString()) {
            return true;
          }
          return false;
        });
        if (found) {
          return alert("Task already there!");
        }
        dispatch({
          type: "ADD_TO_TASK",
          payload: task.trim(),
        });
        setTask("");
      }
    }
  };

  return (
    <Context.Provider value={[state, dispatch]}>
      <main
        className="min-h-full w-full"
        style={{
          background: "linear-gradient(140deg, #0A5783 5.05%, #18A19A 100%)",
        }}
      >
        {/*UI DESIGN */}

        <div
          style={{
            background: "linear-gradient(140deg, #0A5783 5.05%, #18A19A 100%)",
          }}
        >
          <div className="p-20">
            <HomeComp />
          </div>

          <div className="w-[90%] mx-auto">
            <MiddleComp />
          </div>

          <LowerComp />
        </div>

        {/*TODO */}
        <div className="min-h-[75vh] flexComp flex-col">
          <h1 className="text-center text-white text-4xl font-bold">
            Todo Operator
          </h1>
          <br />

          <div className="flexComp w-full gap-5">
            <section className="w-1/3 flexComp">
              <input
                placeholder="Add Task"
                className="outline-none px-5 py-3 w-full rounded-md"
                onKeyUp={(e) => addTask(e)}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </section>
          </div>

          <HomeTodo />
        </div>
      </main>
    </Context.Provider>
  );
}
