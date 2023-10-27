import { Suspense, useContext, use } from 'react';
import { Message } from './components/Message';
import { ThemeContext } from './context/ThemeContext';
import Todos from './components/Todos';
import Page from './components/Page';
const App = () => {
  const { theme } = useContext(ThemeContext);
  const data = use(ThemeContext);
  console.log(theme);
  console.log(data);

  const messagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  }).catch(() => {
    return 'No new message found.';
  });
  return (
    <div>
      <h1>Demo</h1>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
      <Todos />
      <Page array={[1, 2, 3]} />
    </div>
  );
};

export default App;
