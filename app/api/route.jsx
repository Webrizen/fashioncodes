import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: '01',
      title: `I Don't Know Google It | Programmer T Shirt`,
      image: '/p1.png',
      price: 4799,
      cutPrice: 9957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 3957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 90957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 65957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
      ratings: 1.2,
      category: 'T-shirts',
      size: 'S',
      gender: 'women'
    },
  ];

  return NextResponse.json(products);
}

export async function POST(request) {
  const products = [
    {
      id: '01',
      title: `I Don't Know Google It | Programmer T Shirt`,
      image: '/p1.png',
      price: 4799,
      cutPrice: 9957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 3957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 90957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
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
      cutPrice: 65957,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed accusantium, quaerat corrupti ex pariatur harum quasi aliquam voluptas reprehenderit temporibus dolore vitae, ratione molestiae eius ducimus deserunt cum repellendus rerum odio et perferendis, at iste! Possimus quod provident sed odit, fugit dignissimos sapiente nemo sunt a blanditiis dolor neque totam deleniti nisi ducimus nihil quam officia corporis labore dolorem cumque repellendus quaerat. Harum rem iusto rerum molestias eius in. In aperiam excepturi aliquam quae fugit sed consequatur veritatis soluta, cupiditate eos. Quae perferendis obcaecati quam laudantium at a minima, quasi sed, velit, repellat optio nobis ducimus cupiditate ipsum aspernatur!',
      ratings: 1.2,
      category: 'T-shirts',
      size: 'S',
      gender: 'women'
    },
  ];

  const { id } = await request.json();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
