import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { profilePic, message, image, username, timestamp },
          }) => (
            <Post
              key={id}
              profilePic={profilePic}
              message={message}
              timestamp={timestamp}
              username={username}
              image={image}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
