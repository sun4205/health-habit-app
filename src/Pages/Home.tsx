import { useState } from "react";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

export type Habit = {
  id: number;
  name: string;
  completed: boolean;
};

function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  };

  const addHabit = (habitName: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      name: habitName,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  return (
    <div>
      <h1>Health Habit App</h1>

      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} />
    </div>
  );
}

export default Home;
