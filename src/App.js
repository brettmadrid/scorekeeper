import Lottery from './Lottery';

function App() {
  return (
    <div className='App'>
      {/* <Scorekeeper /> */}
      {/* <IconList /> */}
      <Lottery />
      <Lottery title='Mini Daily' maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
