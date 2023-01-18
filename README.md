link: https://react-chatroom-single-room.web.app/

# Chat App

This is a simple chat app created using React framework and a Firebase backend.

The app relies on collection queries queried from Firebase that are assembled using an ascending index to display its messages. User authentification is performed using Firebase auth and read/write permissions are universal.

Because the app queries based on a set of parameters found in the messages collection properties list, users must join an identically named room in order to chat with one another or else the queries will not match.

# How to Use

1. Sign in using Google.

2. Enter a room name (case-sensitive but may include numbers and special characters) that the user you want to speak to is in.

3. Send messages by clicking on the enter message here box, entering a message, and pressing send.

# Note

Users can also run locally by cloning the repository and running npm build start from their CLI.
