import React, { useRef, useOptimistic } from 'react';

const Form = ({ messages, sendMessage }) => {
  const formRef = useRef();
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ],
  );

  async function formAction(formData) {
    'use server';
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    await sendMessage(formData);
  }
  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;
