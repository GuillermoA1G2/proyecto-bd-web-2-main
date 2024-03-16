import { Schema, model } from 'mongoose'
import { Myplaylist, MyplaylistModel,  } from '../types/myplaylist.type'
import { CATEGORY_REFENCE } from '../types/category.type'

const Myplaylist = new Schema<Myplaylist, MyplaylistModel>({
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    genre: {
      type: String,
      required: true,
      trim: true
    },
    releaseYear: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false,
      trim: true
    }
  });

export default model('Myplaylist', Myplaylist)