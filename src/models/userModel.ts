import mongoose from 'mongoose';

import userSchema from '../schemas/userSchema';
import { UserSchema } from '../types/schemaTypes/userTypes';

const User = mongoose.model<UserSchema>('User', userSchema);

export default User;
