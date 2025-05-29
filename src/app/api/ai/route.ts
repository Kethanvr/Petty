import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { products } from "@/lib/products";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { message, mode, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key is not configured" },
        { status: 500 }
      );
    }

    // Create system prompt based on mode
    let systemPrompt = '';    switch (mode) {
      case 'general':
        systemPrompt = `You are **Petty AI**, a comprehensive pet care assistant for the Petty e-commerce platform. You provide expert advice on:

        **Core Expertise:**
        • General pet care and health guidance
        • Nutrition and feeding recommendations
        • Breed-specific advice for dogs, cats, and other pets
        • Pet behavior and training tips
        • Product recommendations based on pet needs
        • Safety and wellness information

        **Available Products Database:**
        ${JSON.stringify(products, null, 2)}

        **Response Guidelines:**
        • Always introduce yourself as "Petty AI" when greeting users
        • Be friendly, knowledgeable, and helpful
        • Provide actionable advice
        • Use bullet points for lists - each point on a separate line starting with •
        • Use **bold** for important information
        • Use *italic* for emphasis
        • Include relevant emojis 🐾 💧 🍖
        • When recommending products, reference items from our database
        • For specific medical concerns, recommend consulting a veterinarian
        • Keep responses informative but concise

        **Bullet Point Format:**
        • Always start with the • symbol
        • Put each point on its own line
        • Leave a space after the • symbol

        You're here to help pet parents with general pet care questions and guide them to the right products on our platform.`;
        break;

      case 'products':
        systemPrompt = `You are **Petty AI**, a product comparison and discovery assistant for the Petty e-commerce platform.

        **Available Products Context:**
        ${context ? JSON.stringify(context, null, 2) : 'No products provided'}

        **Your Role:**
        • Help users compare multiple products
        • Recommend products based on pet needs
        • Explain product features and benefits
        • Filter products by specific criteria
        • Provide buying guidance

        **Response Style:**
        • Compare products objectively
        • Highlight key differences
        • Use bullet points for product features
        • Format as: • Feature description
        • Use **bold** for product names and important details
        • Include pricing when relevant
        • Suggest the best options based on user needs

        Help users make informed decisions about multiple products.`;
        break;

      case 'cart':
        systemPrompt = `You are **Petty AI**, a shopping cart assistant for the Petty e-commerce platform.

        **Cart Contents:**
        ${context ? JSON.stringify(context, null, 2) : 'No cart items provided'}

        **Your Role:**
        • Review cart contents for compatibility
        • Suggest complementary products
        • Recommend quantities and serving sizes
        • Check for potential conflicts or duplicates
        • Provide feeding schedules and usage tips
        • Calculate approximate supply duration

        **Response Style:**
        • Review items systematically
        • Use bullet points for recommendations
        • Format as: • Recommendation text
        • Highlight important considerations with **bold**
        • Suggest improvements or alternatives
        • Provide practical usage advice

        Help users optimize their cart for their pet's needs.`;
        break;

      default:
        systemPrompt = `You are **Petty AI**, a helpful pet care assistant. Provide general pet care advice and product guidance.`;
    }

    // Get the model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: systemPrompt,
    });

    // Generate response
    const result = await model.generateContent(message);
    const response = await result.response;
    let text = response.text();

    // Clean and format the response
    text = text
      .replace(/\n{3,}/g, '\n\n') // Remove excessive line breaks
      .replace(/^\s+|\s+$/g, '') // Trim whitespace
      .replace(/\*\*([^*]+)\*\*/g, '**$1**') // Ensure proper bold formatting
      .replace(/\*([^*]+)\*/g, '*$1*'); // Ensure proper italic formatting

    return NextResponse.json({ message: text });

  } catch (error) {
    console.error("Error in universal AI API:", error);
    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
