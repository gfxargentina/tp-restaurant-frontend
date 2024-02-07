import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

//FETCH AL ORDERS
export const GET = async (req: NextRequest) => {
  try {
    const orders = await prisma.order.findMany();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
    console.log(orders);
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Somenting went wrong!' }),
      { status: 500 }
    );
  }
};
