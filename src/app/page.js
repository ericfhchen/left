export default function Home() {
  return (
    <div className="flex flex-col items-end justify-center min-h-screen overflow-hidden">
      <a href="mailto:office@ericlchen.com" className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <p className="hover:animate-blink font-normal mb-10 text-xl">LEFT</p>
      </a>
    </div>
  );
}