import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
<<<<<<< HEAD
=======
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const contactsCollection = model('contacts', contactSchema);
