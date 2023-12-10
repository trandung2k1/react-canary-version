import { Suspense, useContext, use, useState, cache } from 'react';
import { Message } from './components/Message';
import { ThemeContext } from './context/ThemeContext';
import Todos from './components/Todos';
import Page from './components/Page';
import Form from './components/Form';
import { deliverMessage } from './actions/deliverMessage';
import Post from './components/Post';
export const getPost = cache(async (id) => {
  const rs = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await rs.json();
  return data;
});
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

  const [messages, setMessages] = useState([{ text: 'Hello there!', sending: false, key: 1 }]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  const id = 1;
  getPost(id);
  return (
    <div>
      <h1>Demo</h1>
      <Suspense fallback={<p>Waiting for message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
      <Todos />
      <Form messages={messages} sendMessage={sendMessage} />
      <Page array={[1, 2, 3]} />
      <Post id={id} />
    </div>
  );
};

export default App;
