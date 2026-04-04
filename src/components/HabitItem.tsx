import type { Habit } from "../Pages/Home";
import "./HabitItem.css";

type Props = {
  habit: Habit;
  toggleHabit: (id: number) => void;
};

function HabitItem({ habit, toggleHabit }: Props) {
  return (
    <li
      className={habit.completed ? "completed" : ""}
      onClick={() => toggleHabit(habit.id)}
    >
      <span className="habit-name">{habit.name}</span>
      <button>{habit.completed ? "✅" : "❌"}</button>
    </li>
  );
}

export default HabitItem;
