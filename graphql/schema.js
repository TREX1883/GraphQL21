const User = require('../models/user');

module.exports = {
    createUser: async function({ userInput }, req) {
        // const email = args.userInput.email;
        const existingUser = await User.findOne({email: userInput.email});
        if (existingUser) {
            const error = new Error('User exists already!');
        }
    }
};
// 423, 3:47

// const { buildSchema } = require('graphql');

// module.exports = buildSchema(`
//     type Post {
//         _id: ID!
//         title: String!
//         content: String!
//         imageUrl: String!
//         creator: User!
//         createdAt: String!
//         updatedAt: String!
//     }

//     type User {
//         _id: ID!
//         name: String!
//         email: String!
//         password: String  
//         status: String!
//         posts: [Post!]!
//     }

//     input UserInputData {
//         email: String!
//         name: String!
//         password: String!
//     }

//     type RootMutation {
//         createUser(userInput: UserInputData): User!
//     }

//     schema {
//         mutation: RootMutation
//     }
// `);