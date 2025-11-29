import './App.css'
import { DriveQr } from './components/DriveQr'
import { WhatsappSender } from './components/WhatsappSender'
import { coupleName, defaultMessage, driveLink } from './data/config'

function App() {
  return (
    <div className="min-h-screen px-4 py-10 bg-linear-to-b from-zinc-900 to-black text-zinc-100 flex items-center justify-center">
      <div className="w-full max-w-7xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row justify-evenly gap-10">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl font-semibold">
            Álbum: <span className="text-indigo-400">{coupleName}</span>
          </h2>
          <DriveQr link={driveLink} />
          <p className="text-sm text-zinc-400">
            Escaneie o QR para abrir as fotos no celular.
          </p>
        </div>
        <div className="h-full w-full md:w-2/5 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Receber pelo WhatsApp</h2>
          <p className="text-sm text-zinc-400 mb-5">
            Se a pessoa não conseguir escanear o QR, digite o número dela com DDD.
          </p>
          <WhatsappSender message={defaultMessage} />
        </div>
      </div>
    </div>
  )
}

export default App
