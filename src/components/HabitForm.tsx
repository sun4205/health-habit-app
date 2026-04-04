import { useState } from "react";
import "./HabitForm.css";

type Props = {
  addHabit: (habit: string) => void;
};

function HabitForm({ addHabit }: Props) {
  const [habit, setHabit] = useState<string>("");

  const handleAdd = () => {
    if (habit.trim() === "") return;

    addHabit(habit);
    setHabit("");
  };

  return (
    <div className="form">
      <h2>Add Habit</h2>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter habit..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default HabitForm;
