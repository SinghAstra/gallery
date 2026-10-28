import Gallery from './components/gallery'

function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Photo Gallery</h1>
        <Gallery />
      </div>
    </main>
  )
}

export default App
