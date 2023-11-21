import React, { useState, useEffect } from 'react';
import ChatBot from '../../assets/chatbot.png';
import './Chatbot.css';
import axios from 'axios';

const Chatbot = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [chatGptMessage, setChatGPTMessage] = useState({});

    useEffect(() => {
        setChatMessages([{
            text: 'Hello! How can I assist you today?',
            user: 'chatbot',
        }]);
    }, []);

    useEffect(() => {
        if (Object.keys(chatGptMessage).length > 0) {
            setChatMessages((prevMessages) => [...prevMessages, chatGptMessage]);
        }
    }, [chatGptMessage]);

    const toggleChatbotDiv = () => {
        setIsChatbotVisible(!isChatbotVisible);

        if (isChatbotVisible) {
            setChatMessages([{
                text: 'Hello! How can I assist you today?',
                user: 'chatbot',
            }]);
        }
    };

    const handleSendMessage = async () => {
        try {
            const inputMessageObjct = {
                text: inputMessage,
                user: "user",
            };
            setChatMessages((prevMessages) => [...prevMessages, inputMessageObjct]);

            const response = await axios.post(
                'https://simple-chatgpt-api.p.rapidapi.com/ask',
                {
                    question: inputMessage
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': 'e3f4457b10msh60e2a83fa7423dbp1a663ejsn4980bc13835c',
                        'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com',
                    },
                }
            );

            const gptMessage = { text: response.data.answer + "", user: 'chatbot' };
            setChatGPTMessage(gptMessage);

            setInputMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="chatbotDiv" onClick={toggleChatbotDiv}>
                <img src={ChatBot} alt="ChatbotImage" />
            </div>

            {isChatbotVisible ? <span className="toolitp"></span>: <></>}

            {/* Chatbot Messaging Div */}
            <div className={`chatboMessageDiv ${isChatbotVisible ? 'visible' : 'hidden'}`}>
                <div className="chat-messages">
                    {chatMessages.map((message, index) => (
                        <div key={index} className={message.user}>
                            {message.user === "chatbot" ? <div className="chatBotSeperateMeesageImage">
                                <img src={ChatBot} alt="ChatbotImage" />
                            </div> : <></>}
                            <div className={`seperateMessageDiv ${message.user === "user" ? 'userSeperateMessageDiv' : 'chatbotSeperateMessageDiv'}` }>
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>

            {isChatbotVisible && <div className="blurOverlay" />}
        </>
    );
};

export default Chatbot;
