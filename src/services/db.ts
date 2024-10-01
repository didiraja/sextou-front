import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_EVENTIM_DB;

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not constantly created.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient for every connection.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
