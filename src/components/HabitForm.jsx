import { useState } from "react";

function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleAdd = () => {
    if (habit.trim === "") return;

    addHabit(habit);
    setHabit("");
  };

  return (
    <div>
      <h2>Add habit</h2>
      <input
        type="text"
        value={habit}
        OnChange={(e) => setHabit(e.target.value)}
        placeholder="Enter habit..."
      />
      <button onClick={handleAdd} Add></button>
    </div>
  );
}

export default HabitForm;
