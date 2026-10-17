export const metadata = {
  title: 'AnimeHubWatch',
  description: 'Streaming anime with a clean modern interface.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
