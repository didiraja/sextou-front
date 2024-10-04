import { MongoAPIError, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

import clientPromise from '@/services/db';

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('eventim');
    const collection = db.collection('raw_events');

    const event = await collection.findOne({ _id: new ObjectId(id) });

    return NextResponse.json(event, { status: 200 });
  } catch (e) {
    console.error(e);

    const error = e as MongoAPIError;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
