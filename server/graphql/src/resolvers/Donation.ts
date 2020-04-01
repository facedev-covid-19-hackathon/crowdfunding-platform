// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { DonationResolvers } from '../generated/graphqlgen';

export const Donation: DonationResolvers.Type = {
  ...DonationResolvers.defaultResolvers,

  Campaign: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  Reward: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
