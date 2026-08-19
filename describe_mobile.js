import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({});

async function run() {
  try {
    const response = await fetch("https://i.ibb.co/kVK20WNy/Gemini-Generated-Image-can617can617can6.jpg");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const resp = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { data: buffer.toString("base64"), mimeType: "image/jpeg" } },
            { text: "Describe the UI layout of this MOBILE profile page in EXTREME detail. List every single text, button, color, icon, layout structure, and navigation tab you see. I need to replicate this pixel-perfectly in HTML/Tailwind for a mobile screen." }
          ]
        }
      ]
    });
    console.log(resp.text);
  } catch (e) {
    console.error(e);
  }
}
run();
