import VideoSelector from '@/components/VideoSelector';


export default function MultiSelection() {
  

  return (
    <div>
    

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Selected Channel</h1>
        <VideoSelector />
      </main>
    </div>
  );
}
