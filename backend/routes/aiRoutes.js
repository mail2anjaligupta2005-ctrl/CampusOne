const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
  model: "gemini-flash-latest",
  contents: message,
});

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      message: error.message || "AI Error",
    });
  }
});

module.exports = router;