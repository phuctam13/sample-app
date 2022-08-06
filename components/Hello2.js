// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ products });
}

const products = [
  {
    id: 1,
    title: "Prod1",
    price: "1.2",
    srcImage: "/images/tv.jpg",
  },
  {
    id: 2,
    title: "Prod2",
    price: "10.98",
    srcImage: "/images/tv.jpg",
  },
  {
    id: 3,
    title: "Prod3",
    price: "100.98",
    srcImage: "/images/tv.jpg",
  },
];
