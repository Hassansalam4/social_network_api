import {Types, types} from "mongoose";

const names = [ "sample 1, sample 2 , sample 3, sample 4, sample 5"]
;
//   thoughts sample
const thoughtsMessages = [
  'i love my wife',
  'Find My Phone',

  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Calendar',
];

// reaction samples
const reactions = ['👍', '👎', '❤️', '😂', '😯', '😢', '😡'];
const reactionBodies = ["awesome", "my iphone 14", "fake money", "jurassic park", "hello world"];

// Define the 'usernames' array
const usernames = ["username1", "username2", "username3"];

// Get a random item given an array
export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random thought from the thoughtsMessages array
export const getRandomName =() =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
export const getRandomAssignments = (int: number) => {
  const results: any[] = [];
  for (let i = 0; i < int; i++) {
    results.push({
      name: getRandomArrItem(thoughtsMessages),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  const getRandomThoughts = (
    numThoughts: number,
    userIds: Types.ObjectId[]
  ) => {
    const thoughts = [];
  
    for (let i = 0; i < numThoughts; i++) {
      const randomUser = getRandomArrItem(userIds);
  
      thoughts.push({
        thoughtText: getRandomArrItem(thoughts),
        username: usernames[userIds.indexOf(randomUser)],
        userId: randomUser,
        reactions: [
          {
            reactionId: new Types.ObjectId(),
            reactionBody: getRandomArrItem(reactionBodies),
            username: getRandomArrItem(usernames),
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      });
    }
  };
  
  const thoughts = [];
  const userIds: Types.ObjectId[] = []; // Declare the 'userIds' variable
  
  for (let i = 0; i < thoughts; i++) {
    const randomUser = getRandomArrItem(userIds);
  
    thoughts.push({
      thoughtText: getRandomArrItem(thoughts),
      username: usernames[userIds.indexOf(randomUser)],
      userId: randomUser,
      reactions: [
        {
          reactionId: new Types.ObjectId(),
          reactionBody: getRandomArrItem(reactionBodies),
          username: getRandomArrItem(usernames),
          createdAt: new Date(),
        },
      ],
      createdAt: new Date(),
    });
  }
  
  return thoughts;
};
