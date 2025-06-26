# 🧠 Sentiment Analyzer — Built with Next.js + Transformers.js

This project is a simple yet powerful sentiment analysis app built using:

- **Next.js (App Router)**
- **Transformers.js** by 🤗 Hugging Face
- **Tailwind CSS** for styling
- **Web Workers** for smooth client-side inference

It lets users enter any text and instantly see whether the sentiment is **positive** or **negative** — all running directly in the browser with no backend needed.

---

## 🌐 Live Demo

> 📲 Try it now → [https://sentiment-analysis-five-snowy.vercel.app](https://sentiment-analysis-five-snowy.vercel.app)

Just type a sentence and get an instant sentiment prediction powered by distilBERT — all inside your browser!

---

## 💡 What it does

When the user types something in the input field, the app:
1. Sends the text to a **Web Worker**.
2. The worker loads a pretrained `distilBERT` model (`Xenova/distilbert-base-uncased-finetuned-sst-2-english`) via Transformers.js.
3. The model performs **sentiment analysis** entirely **client-side**, returning a label (like `POSITIVE` or `NEGATIVE`) with a confidence score.
4. The result is displayed below the input, in real time.

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js](https://nextjs.org/) | App framework (App Router + static export) |
| [Transformers.js](https://huggingface.co/docs/transformers.js) | Load and run ML models in-browser |
| [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) | Keeps model inference off the main UI thread |
| [Tailwind CSS](https://tailwindcss.com/) | Simple and responsive UI styling |
| [distilBERT (SST-2)](https://huggingface.co/Xenova/distilbert-base-uncased-finetuned-sst-2-english) | Model for binary sentiment classification |

---

## ✨ Features

- 🧠 Real-time sentiment analysis
- ⚡ 100% client-side inference — no server or API calls
- 🧵 Smooth performance thanks to Web Workers
- 💅 Modern, responsive UI with Tailwind CSS
- 📦 Deployed as a static Next.js app via Vercel

---

## 📦 Model Details

- **Model**: `Xenova/distilbert-base-uncased-finetuned-sst-2-english`
- **Task**: `text-classification`
- **Trained on**: SST-2 (Stanford Sentiment Treebank)
- **Parameters**: ~67M
- **Runtime**: Fully in-browser via WebAssembly + ONNX

---

## 🚧 TODO

- [ ] Improve mobile performance on slow networks
- [ ] Add server-side inference version

---

## 💖 Credits

Built with:
- [Transformers.js](https://huggingface.co/docs/transformers.js)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for hosting

---

## 🐣 License

MIT — do whatever you want, just be kind and credit if you fork ✨
