'use client';

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient
} from "convex/react";
import React from "react";

import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode
};

const converxUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(converxUrl);

export const ConvexClientProvider = ({
  children
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
          {children}
        </Authenticated>
        <AuthLoading>
          <Loading/>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}