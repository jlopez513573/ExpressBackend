import { Schema } from 'mongoose';

import { EmailVerificationStatuses, SubscriptionTypes, UserTypes } from '../types/commonTypes';
import { UserSchema } from '../types/schemaTypes/userTypes';

const userSchema = new Schema<UserSchema>(
  {
    _id: { type: String },
    className: { type: String },
    password: { type: String },
    isMfaEnabled: { type: Boolean },
    createDateTime: { type: String },
    updateDateTime: { type: String },
    lastLoginTime: { type: String },
    resetPassword: { type: Boolean },
    loginCount: { type: Number },
    userType: { type: String, enum: UserTypes, default: UserTypes.REGISTERED },
    subscriptionType: {
      type: String,
      enum: SubscriptionTypes,
      default: SubscriptionTypes.FREE,
    },
    emailVerificationStatus: {
      type: String,
      enum: EmailVerificationStatuses,
      default: EmailVerificationStatuses.PENDING,
    },
    membership: {
      subscriberID: { type: String },
      subscriptionStartDate: { type: String },
      subscriptionExpirationDate: { type: String },
      subscriptionInterval: { type: String },
      subscriptionPaymentMethod: { type: String },
      grossPayment: { type: Number },
      paymentFee: { type: Number },
      managedLimit: { type: Number },
    },
    personalInfo: {
      firstName: { type: String },
      lastName: { type: String },
    },
    preferences: {},
    userActivity: {},
    scenariosMap: {},
    commonScenarioData: {},
  },
  { collection: 'User' },
);

export default userSchema;
