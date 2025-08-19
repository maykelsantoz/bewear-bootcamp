// "use client";

import Image from "next/image";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductMarcas = async ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        <div className="px-5">
          <Image
            src="/nike.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="icon"
            className="h-auto w-full rounded-3xl"
          />
          <h3 className="px-0.2 font-semibold">Nike</h3>
        </div>
        <div className="px-5">
          <Image
            src="/adidas.svg"
            alt="Leve uma vida com estilo"
            height={30}
            width={16}
            sizes="icon"
            className="h-auto w-full"
          />
          <h3 className="font-semibold">Adidas</h3>
        </div>
        <div className="px-5">
          <Image
            src="/puma.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
          <h3 className="px-0.2 font-semibold">Nike</h3>
        </div>
        <div className="px-5">
          <Image
            src="/newbalance.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
          <h3 className="px-0.2 font-semibold">Nike</h3>
        </div>
        <div className="px-5">
          <Image
            src="/newbalance.svg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
          <h3 className="px-0.2 font-semibold">Nike</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductMarcas;
