import Prop from './components/Prop';

function App() {
  return (
    <div>
      <Prop firstname="Jane" lastname="Doe" age={45} haircolor="Black"/>  
      <Prop firstname="John" lastname="smith" age={88} haircolor="Black"/>  
      <Prop firstname="Millard" lastname="Fillmore" age={768} haircolor="Pink"/>  
      <Prop firstname="Maria" lastname="Smith" age={7} haircolor="Green"/>  
    </div>
  );
}

export default App;

// Props: way to pass info from parent Ex.(App.js) to child Ex.(Prop)