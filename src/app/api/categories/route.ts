import { NextResponse } from 'next/server';

export const GET = () => {
  return new NextResponse('Probando api nextjs', { status: 200 });
};
