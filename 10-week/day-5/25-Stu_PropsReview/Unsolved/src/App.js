import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendsCard from "./components/FriendsCard";
import friends from "./friends.json"

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(friend => {
        return (
          <FriendsCard 
            name={friend.name} 
            occupation={friend.occupation}  
            location={friend.location}  
            photoUrl={friend.image} 
          />
        )
      })}
    </Wrapper>
  );
}

export default App;
