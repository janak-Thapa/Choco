"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/types'
import { getAllproducts } from '@/http/api'
import ProductSheet from './product-sheet'
import { useNewProduct } from '@/store/product/product-store'

const ProductsPage = () => {
  const { onOpen } = useNewProduct();

  // Fetching products data using react-query
  const { data: products } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getAllproducts,
  });

  return (
    <>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold tracking-tight'>Products</h3>
        <Button size={'sm'} onClick={onOpen}>Add Product</Button>
        <ProductSheet />
      </div>

      <DataTable columns={columns} data={products || []} />
    </>
  )
}

export default ProductsPage;
