import Lottie from 'react-lottie';
import Menu from './assets/lotties/menu.json';

function App() {
  return (
    <div className="text-white bg-neutral-950 h-screen">
      <h1>Hey</h1>
      <Lottie 
        options={{ animationData: Menu }}
        eventListeners={[{ eventName: 'complete', callback: () => console.log('the animation completed:') }]}
        height={200}
        width={200}
      />
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=Pz4Vslf55kg&ab_channel=SunnyBui
// https://www.youtube.com/watch?v=Ci3J2Fk29gk&ab_channel=SonduckFilm