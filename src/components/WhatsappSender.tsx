import { useEffect, useState } from "react";

export function WhatsappSender({ message }: { message: string }) {
  const [phone, setPhone] = useState("");
  const [history, setHistory] = useState<string[]>(() => {
    const stored = localStorage.getItem("wads_history");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wads_history", JSON.stringify(history));
  }, [history]);

  const formatPhone = (value: string) => value.replace(/\D/g, "");

  const handleSend = () => {
    const cleaned = formatPhone(phone);
    if (!cleaned) return alert("Digite um número válido");

    const url = `https://wa.me/55${cleaned}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");

    setHistory((prev) => [cleaned, ...prev.filter((x) => x !== cleaned)].slice(0, 15));
    setPhone("");
  };

  const handleQuick = (num: string) => setPhone(num);

  return (
    <div className="space-y-4">
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Número com DDD (ex: 11987654321)"
        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 
                   text-zinc-200 placeholder-zinc-500 focus:ring-2 
                   focus:ring-indigo-400 outline-none"
      />
      <div className="flex gap-3">
        <button
          onClick={handleSend}
          className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-medium"
        >
          Enviar
        </button>
        <button
          onClick={() => setPhone("")}
          className="px-4 py-3 border border-zinc-700 bg-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-700"
        >
          Limpar
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-5 bg-zinc-800 border border-zinc-700 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <strong className="text-sm text-zinc-200">Últimos números</strong>

            <button
              onClick={() => setHistory([])}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Limpar tudo
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {history.map((h, i) => (
              <button
                key={i}
                onClick={() => handleQuick(h)}
                className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 hover:bg-zinc-700"
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
