import {Types} from "mongoose";

//   thoughts sample

const reactionBodies = [
  'Like',
  'Love',
  'Haha',
  'Wow',
  'Sad',
  'Angry',
];

const usernames = ["username1", "username2", "username3"]; // Define the 'usernames' array

// function to get a random item from any array
export const getRandomArrItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

// create test users (test1 to test5)
export const getUsers = () => {
  return usernames.map((username) => ({
    _id: new Types.ObjectId(),
    username,
    email: `${username}@mail.com`,
    thoughts: [],
    friends: [],
  }));
};

// create random thoughts for users
export const getRandomThoughts = (
  numThoughts: number,
  userIds: Types.ObjectId[]
) => {
  const thought: { thoughtText: any; username: string; userId: Types.ObjectId; reactions: { reactionId: Types.ObjectId; reactionBody: string; username: string; createdAt: Date; }[]; createdAt: Date; }[] = [];

  for (let i = 0; i < numThoughts; i++) {
    const randomUser = getRandomArrItem(userIds);

    thought.push({
      thoughtText: getRandomArrItem(thought),
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

  return thought;
};