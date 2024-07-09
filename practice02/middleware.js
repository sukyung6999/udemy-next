import { NextResponse } from 'next/server';

export function Middleware() {
  return new NextResponse().next();
}
