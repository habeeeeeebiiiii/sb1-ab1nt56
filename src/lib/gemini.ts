import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCb_0O5qJXpKxFsZUWcDnLa4nDlXAg93MQ');

export async function generateMedicalResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const result = await model.generateContent(`You are a knowledgeable medical AI assistant. 
    Your responses should be based on trusted medical sources like Harrison's Principles of Internal Medicine.
    Provide accurate, professional medical information. If unsure, acknowledge limitations.
    
    User question: ${prompt}`);
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I encountered an error while processing your request. Please try again.';
  }
}