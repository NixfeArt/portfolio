import { NextResponse } from 'next/server';

export async function GET(request) {
  const users = [
    { id: 1, name: "Aleksandar", password: "acaaca", email: "acike.kovacevic32@gmail.com", username: "Destronixfe" },
    { id: 2, name: "Jane" },
  ];

  return NextResponse.json({ users });
}