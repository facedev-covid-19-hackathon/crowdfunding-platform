const path = require('path');
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './schema'));

export default mergeTypes(typesArray, { all: true });
