//import { PrismaClient } from '@prisma/client';
import { prisma } from '@/utils/connect';
import { NextResponse } from 'next/server';

//const prisma = new PrismaClient();

//FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Somenthing went wrong!' }),
      { status: 500 }
    );
  }
};
