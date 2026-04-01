import { GoogleGenAI} from "@google/genai";


const genai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY!,
})

const model = 'gemini-2.5-flash'

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await genai.models.generateContent({
    model,
    contents:[
      {
        text: `Transcreva o áudio para português do Brasil. Seja preciso e natural na transcrição. Mantenha a pontuação adequada e divida o texto em parágrafos quando for apropriado. O áudio é fornecido como um arquivo de áudio codificado em base64. O resultado deve ser`,
      }, 
      {
        inlineData: {
          mimeType,
          data:audioAsBase64,
        }
      }
    ],
  }) 
  if(!response.text) {
    throw new Error('Não foi possivel converter o áudio.')
  }
  return response.text
}