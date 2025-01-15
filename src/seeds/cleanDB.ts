import { Thought } from '../models/index.js';
import { getUsers } from './index.js';
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    await getUsers.deleteMany({});
    console.log('User collection cleaned.');

    await Thought.deleteMany({});
    console.log('thoughts collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};
export { Thought };
export default cleanDB;
