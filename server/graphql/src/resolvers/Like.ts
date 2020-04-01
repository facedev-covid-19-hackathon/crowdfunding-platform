// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { LikeResolvers } from '../generated/graphqlgen';

export const Like: LikeResolvers.Type = {
  ...LikeResolvers.defaultResolvers,

  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  images: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
