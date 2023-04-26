import { StatusFilter } from "components/StatusFilter/StatusFilter";
// import { TaskCounter } from "components/TaskCounter/TaskCounter";
// import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header >
      <section >
        <h2 >Users</h2>
        
      </section>
      <section >
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};