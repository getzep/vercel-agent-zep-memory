# Vercel AI + Zep Integration Guide

To quickly set up the project, you can create a new Next.js app using the following command:

```bash
pnpm create next-app@latest my-agent-project --example vercel-zep-memory
```

This guide demonstrates how to integrate Zep with the Vercel AI SDK to build an intelligent chatbot with memory capabilities.
We'll walk through setting up a Next.js project that uses Zep to store conversation history and contextual data about users.

The guide is available [here](https://help.getzep.com/docs/ecosystem/vercel-ai).

## Deploy with Vercel

You can deploy this project to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A//github.com/getzep/vercel-agent-zep-memory&env=ZEP_API_KEY,OPENAI_API_KEY)

## Setup

1. Create a `.env.local` file in your project root with your API keys:

```text
OPENAI_API_KEY=<your-openai-key>
ZEP_API_KEY=<your-zep-key>
```

2. Seed initial data:

```bash
pnpm seed
```

After running the seed script, you should see output similar to:

```text
🤖 Seeding Zep with initial data...
Adding user:
 userID:  Emily163733bf-8ffc-4824-9613-9d1f7a86457e
 email:  Emily@painters.com
 firstName:  Emily
 lastName:  Painter
Adding session:  2a36ba9a-1fd9-4b59-8832-18f5d0eb5140
Adding chat history...
Adding transactions...
Adding account status info...
Adding support cases...
✅ Seeding complete! Please wait a few minutes for all data to be ingested into the knowledge graph.
```

Note: Save the `userID` from the output as you'll need it for the chat interface.

## Running the app

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000/{userId}](http://localhost:3000/{userId}) with your browser to see the chat interface, replacing `{userId}` with the actual user ID you saved from the seed output.

## Project Structure

The main components of this project are:

- `app/[userId]/page.tsx`: The chat interface component, using `userId` as a path parameter
- `app/api/chat/route.ts`: The route handler for chat functionality
- Various utility functions for working with Zep's memory and knowledge graph capabilities

## Learn More

To learn more about the technologies used in this project:

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Zep Documentation](https://help.getzep.com)
- [Next.js Documentation](https://nextjs.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
