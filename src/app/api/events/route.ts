import { NextResponse } from 'next/server';

import DateClass from '@/services/Date';
import clientPromise from '@/services/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') as string) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  try {
    const client = await clientPromise;
    const db = client.db('eventim'); // Replace with your database name
    const collection = db.collection('raw_events'); // Replace with your collection name

    const items = await collection
      .find({
        date: {
          $gte: new Date(DateClass.todayDate()),
        },
        isPublic: {
          $exists: false,
        },
      })
      .sort({ date: 1 })
      .limit(limit)
      .toArray();
    const totalItems = await collection.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    return NextResponse.json({ items, totalPages }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
