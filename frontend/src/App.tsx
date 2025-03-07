import teamData from './CollegeBasketballTeams.json';
import './App.css';

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        {city}, {state}
      </h3>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamData.teams.map(({ school, name, city, state }) => (
        <Team
          key={school}
          school={school}
          name={name}
          city={city}
          state={state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
