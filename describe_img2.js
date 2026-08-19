import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({});

async function run() {
  try {
    const response = await fetch("https://i.ibb.co/qFLTqT80/Gemini-Generated-mage-lb5r1plb5r1plb5r.jpg");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const resp = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { data: buffer.toString("base64"), mimeType: "image/jpeg" } },
            { text: "Describe the UI layout of this profile page in EXTREME detail. List every single text, button, color, icon, layout structure, sidebar, grid, and navigation tab you see. I need to replicate this pixel-perfectly in HTML/Tailwind." }
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
