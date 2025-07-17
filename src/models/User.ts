import mongoose, { Schema, models, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['Admin', 'User'],
      default: 'User',
    },

    companyName: {
      type: String,
      // required: function (this: mongoose.Document) {
      //   return this.get('role') === 'User';
      // },
    },

    phoneNumber: {
      type: String,
      // required: function (this: mongoose.Document) {
      //   return this.get('role') === 'User';
      // },
    },

    zipCode: {
      type: String,
      // required: function (this: mongoose.Document) {
      //   return this.get('role') === 'User';
      // },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export const User = models.User || model('User', userSchema)
