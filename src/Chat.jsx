import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function Chat(props) {
  const {name, image} = props
  console.log(image)

  const config = {
    hideUserAvatar: true,
    hideBotAvatar: true,
    floating: true,
    // botAvatar: 'img.png',
    // userAvatar: 'img.png'
};

  const steps=[
    {
      id: '1',
      message: `Hi, I'm ${name}, What's your name?`,
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4'
      // end: true,
    },
    {
      id: '4',
      message: `What's your favorite thing to do outside?`,
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      trigger: '6',
    },
    {
      id: '6',
      message: `Wow, that sounds fun! We should try that together sometime`,
      trigger: '7',
    },
    {
      id: '7',
      message: `Do you like ice cream?`,
      trigger: '8',
    },
    {
      id: '8',
      user: true,
      trigger: '9',
    },
    {
      id: '9',
      message: `Wow - same!`,
      trigger: '10',
    },
    {
      id: '10',
      message: `Sorry - I have to go now... nice chatting with you! Bye!`,
      end: true,
    },
  ]


  return(
    <ThemeProvider theme={theme}>
      <ChatBot 
        steps={steps} 
        {...config}
        />;
    </ThemeProvider>
  )
}