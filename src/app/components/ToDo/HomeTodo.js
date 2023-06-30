import Context from "@/app/context/Context";
import { useContext, useState } from "react";

const HomeTodo = () => {
  const [{ tasks }, dispatch] = useContext(Context);
  const [query, setQuery] = useState("");

  const deleteTask = (item) => {
    dispatch({
      type: "REMOVE_FROM_TASK",
      payload: item,
    });
  };

  const completeTask = (item) => {
    dispatch({
      type: "TASK_COMPLETE",
      payload: item,
    });
  };

  return (
    <div className="p-5">
      <div className="flexComp w-full gap-5">
        <section className="w-[25vw] flexComp">
          <input
            placeholder="Search Task"
            className="outline-none px-5 py-3 w-full rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>
      </div>

      <br />
      {tasks.length === 0 && (
        <div className="flexComp">
          <h2 className="text-white">No task present</h2>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 ">
        {tasks.length > 0 &&
          tasks
            .filter((p) =>
              p.task
                .toString()
                .toLowerCase()
                .includes(query.toString().toLowerCase())
            )
            .map((item) => (
              <div
                key={item.task}
                className={`${
                  item.completed ? "bg-gray-500" : "bg-white"
                } text-center rounded-3xl border shadow-lg p-5 max-w-xs`}
              >
                <h1 className="text-lg font-semibold text-gray-700">
                  {" "}
                  {item.task}{" "}
                </h1>
                <h3 className="text-sm text-gray-400 "> Task </h3>
                <div className="flexComp ">
                  <button
                    className=" mr-3 bg-indigo-600 px-5 py-1 mt-8 rounded-3xl text-gray-100 tracking-wide"
                    onClick={() => completeTask(item)}
                    disabled={item.completed ? true : false}
                  >
                    Completed
                  </button>
                  <button
                    className="bg-red-600 px-5 py-1 mt-8 rounded-3xl text-gray-100 tracking-wide"
                    onClick={() => deleteTask(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomeTodo;
