import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard";

const users = [
  {
    userName: "AlvaroToro9",
    name: "Álvaro Toro Martínez",
    isFollowing: true,
  },
  {
    userName: "sfdxpro",
    name: "SfdxShow",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez.",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export default function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, isFollowing, name } = user;

        return (
          <TwiterFollowCard
            initialIsFollowing={isFollowing}
            userName={userName}
            key={userName}
          >
            {name}
          </TwiterFollowCard>
        );
      })}
    </section>
  );
}
