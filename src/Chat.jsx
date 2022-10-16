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
  const {name} = props

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
      end: true,
    },
  ]


  return(
    <ThemeProvider theme={theme}>
      <ChatBot 
        steps={steps} 
        // botAvatar={smile}
        />;
    </ThemeProvider>
  )
}