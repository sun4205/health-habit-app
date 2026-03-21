type Habit = {
  id: number;
  name: string;
  completed: boolean;
};

type Props = {
  habit: Habit;
  toggleHabit: (id: number) => void;
};

function HabitItem({ habit, toggleHabit }: Props) {
  return (
    <li>
      {habit.name}{" "}
      <button onClick={() => toggleHabit(habit.id)}>
        {habit.completed ? "✅" : "❌"}
      </button>
    </li>
  );
}

export default HabitItem;
