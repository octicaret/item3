import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({});

async function run() {
  try {
    const buffer = fs.readFileSync("img.jpg");
    
    const resp = await ai.models.generateContent({
      model: "gemini-flash-latest",
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
