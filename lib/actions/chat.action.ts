"use server";
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available
if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Missing GOOGLE_API_KEY environment variable.");
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Initialize the Google Generative AI client
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getCoachingStream({ message }: { message: string }) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: message,
    });
    return response.text;
  } catch (error) {
    console.error("Error in getCoachingStream:", error);
    return "An error occurred while processing your request.";
  }
}
