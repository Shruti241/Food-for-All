import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey!",
    trigger: "1",
  },
  {
    id: "1",
    message: "What should I call you?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Donate" },
      { value: 2, label: "Volunteer" },
    ],
    end: true,
  },
];

const theme = {
  background: "#e4f0d0",
  headerBgColor: "#738290",
  headerFontSize: "20px",
  botBubbleColor: "#A1B5D8",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

const config = {
  botAvatar: "/assets/img/logo.png",
  floating: true,
};

function Chat() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="NatureBridge Bot" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default Chat;