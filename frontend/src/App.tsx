import teamData from './CollegeBasketballTeams.json';
import './App.css';

// welcome heading
function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

// creates a team instance to print
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

// compiles each team into a list (basically like a loop)
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

// brings all the functions together
function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
