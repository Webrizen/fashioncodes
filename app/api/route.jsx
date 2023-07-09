import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: '01',
      title: `I Don't Know Google It | Programmer T Shirt`,
      image: '/p1.png',
      price: 4799,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ratings: 4.5,
      category: 'Clothing And Accessories',
      size: 'M',
      gender: 'men'
    },
    {
      id: '02',
      title: `While Alive Eat Sleep Code | Programmer T Shirt`,
      image: '/p2.png',
      price: 899,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ratings: 3.8,
      category: 'Topwear',
      size: 'L',
      gender: 'women'
    },
    {
      id: '03',
      title: `If It Works Don't Touch | Programmer T Shirt`,
      image: '/p3.png',
      price: 3399,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ratings: 4.2,
      category: 'T-shirts',
      size: 'S',
      gender: 'men'
    },
    {
      id: '04',
      title: `It Works on my Machine | Programmer T Shirt`,
      image: '/p4.png',
      price: 199,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ratings: 1.2,
      category: 'T-shirts',
      size: 'S',
      gender: 'women'
    },
  ];
  return NextResponse.json(products);
}