import { Schema, model, type Document } from 'mongoose';

interface IUsers extends Document {
    username: string,
    email: string,
    thought: Date,
    end: Date,
    friends: Schema.Types.ObjectId[]
}

const UserSchema = new Schema<IUsers>(
    {
        username: {
            type: String,
            required: true,
        },
        friends: {
            type: [Schema.Types.ObjectId],
            ref: 'User',
            default: [],
        },
        thought: {
            type: Date,
            default: Date.now(),
        },
        end: {
            type: Date,
            // Sets a default value of 12 weeks from now
            default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
        },
        email: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);

interface IUsers extends Document {
    // Define the properties of the ICourse interface here
}

const User= model<IUsers>('User', UserSchema);

export default User;
