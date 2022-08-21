import { createSignal } from 'solid-js';
import { Title } from 'solid-start';
import '../css/index.css';

export default function Home() {
  const [nickname, setNickname] = createSignal<string>('');

  const sendNickNameToServer = () => {
    console.log(nickname());
  };

  return (
    <main>
      <Title>Chat App</Title>
      <div> Enter your name: </div>
      <input
        value={nickname()}
        onChange={(e) => setNickname(e.currentTarget.value)}
        placeholder='What is your NickName?'
        type='text'
      />
      <button onClick={sendNickNameToServer} type='submit'>
        Enter
      </button>
      {nickname()}
      <a href='/about'>About</a>
    </main>
  );
}
