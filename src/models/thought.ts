import { Schema, Types, model, type Document } from 'mongoose';

interface IThoughts extends Document {
    thoughtText: string,
    createdAt: Date,
    username: string,
    reactions: IReaction[]
}
interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date
  }
  
  const reactionSchema = new Schema<IReaction>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { 
        timestamps: true,
        id: false
     }
  );
  

const thoughtSchema = new Schema<IThoughts>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            
            
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        },
        timestamps: true,
        _id: false
    }
);

interface IThoughts extends Document {
    first: string,
    last: string,
    github: string,
    assignments: Schema.Types.ObjectId[]
}

const Thought = model<IThoughts>('Thought', thoughtSchema);



export default Thought;
