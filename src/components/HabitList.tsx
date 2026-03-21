import HabitItem from "./HabitItem";

type Habit = {
  id: number;
  name: string;
  completed: boolean;
};

type Props = {
  habits: Habit[];
  toggleHabit: (id: number) => void;
};

function HabitList({ habits, toggleHabit }: Props) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} toggleHabit={toggleHabit} />
      ))}
    </ul>
  );
}

export default HabitList;
