export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded">
        <p>
          Welcome to Vercel AI + Zep Memory starter application! To start
          chatting, please navigate to <strong>/userId</strong> in the URL path.
          (<strong>userId</strong> is a variable corresponding to your Zep User
          ID).
        </p>
      </div>
    </div>
  );
}
