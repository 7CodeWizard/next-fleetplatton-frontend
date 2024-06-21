'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@/components/templates/MainLayout';

export default function ProviderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider>
      <MainLayout>{children}</MainLayout>
    </ChakraProvider>
  );
}
