import React, { useEffect, useRef, useState } from 'react';
import '../chat/Chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };


  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [text]);
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="avatar" />
          <div className="texts">
            <span>Steph Olasunkanmi</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="phone" />
          <img src="/video.png" alt="video" />
          <img src="/info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          {/* <img src="/avatar.png" alt="" /> */}
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, modi exercitationem adipisci odio possimus ipsum tempora porro quasi sit assumenda quis at delectus culpa incidunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, modi exercitationem adipisci odio possimus ipsum tempora porro quasi sit assumenda quis at delectus culpa incidunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="/avatar.png" alt="" /> */}
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, modi exercitationem adipisci odio possimus ipsum tempora porro quasi sit assumenda quis at delectus culpa incidunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, modi exercitationem adipisci odio possimus ipsum tempora porro quasi sit assumenda quis at delectus culpa incidunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="/avatar.png" alt="" /> */}
          <div className="texts">
            <img src="/whatitcost.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, modi exercitationem adipisci odio possimus ipsum tempora porro quasi sit assumenda quis at delectus culpa incidunt.</p>
            <span>1 min ago</span>
          </div>
        </div>
      <div ref={endRef}></div>
      </div>
      <div className="botton">
        <div className="icons">
          <img src="/img.png" alt="img" />
          <img src="/camera.png" alt="camera" />
          <img src="/mic.png" alt="mic" />
        </div>
        <input
          type="text"
          placeholder='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="/emoji.png" onClick={() => setOpen(!open)} alt="emoji" />
          <div className="emoji">
            <div className="picker">
            {open && <EmojiPicker onEmojiClick={handleEmoji} />}
            </div>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
};

export default Chat;
