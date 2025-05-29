import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { message, product } = await request.json();

    if (!message || !product) {
      return NextResponse.json(
        { error: "Message and product data are required" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key is not configured" },
        { status: 500 }
      );
    }    // Create the system prompt with product information
    const systemPrompt = `You are Petty AI, a specialized AI assistant for pet products and pet care. You have detailed information about a specific product and should help customers make informed decisions.

PRODUCT INFORMATION:
- Name: ${product.name}
- Price: ₹${product.price} (Original: ₹${product.originalPrice})
- Category: ${product.category}
- Brand: ${product.brand}
- Description: ${product.description}
- Pet Type: ${product.petType}
- Target Life Stages: ${product.targetLife?.join(", ") || "Not specified"}
- Flavor: ${product.flavor || "Not specified"}
- Weight/Size: ${product.weight}
- Age Categories: ${product.ageCategories?.join(", ") || "Not specified"}
- Quantities Available: ${product.quantities?.join(", ") || "Not specified"}
- Special Features: ${product.specialFeatures?.join(", ") || "Not specified"}
- Nutritional Information: ${product.nutritionalInfo ? 
  `Protein: ${product.nutritionalInfo.protein || "Not specified"}, Fat: ${product.nutritionalInfo.fat || "Not specified"}, Fiber: ${product.nutritionalInfo.fiber || "Not specified"}, Moisture: ${product.nutritionalInfo.moisture || "Not specified"}` 
  : "Not specified"}
- In Stock: ${product.inStock ? "Yes" : "No"}
- Rating: ${product.rating}/5 stars
- Tags: ${product.tags?.join(", ") || "Not specified"}

INSTRUCTIONS:
1. Always introduce yourself as "Petty AI" when greeting users
2. Answer questions specifically about this product using the provided information
3. Be helpful, friendly, and knowledgeable about pet care
4. If asked about pet age, breed, or specific needs, provide appropriate guidance
5. When you don't have specific information in the product data, actively search for and provide relevant information from your knowledge base about:
   - General pet nutrition guidelines
   - Breed-specific dietary needs
   - Age-appropriate feeding recommendations
   - Common pet health considerations
   - Product safety information
6. If you still lack crucial information after searching your knowledge, suggest that the user could consult with a veterinarian or search online for more specific details
7. Always prioritize pet safety and health
8. Provide practical advice about feeding, portions, and usage
9. Keep responses concise but informative
10. If asked about comparisons with other products, explain that you can only provide information about this specific product
11. For complex health or dietary questions, recommend consulting with a veterinarian

RESPONSE STYLE:
- Start responses with "As Petty AI" or "I'm Petty AI" when appropriate
- Be conversational and friendly
- Use emojis occasionally to make responses more engaging 🐾
- Provide actionable advice when possible
- Use bullet points for lists - ALWAYS put each bullet point on a separate line
- Format bullet points as: • Point text here
- Use numbered lists (1., 2., 3.) for step-by-step instructions
- Use **bold text** for important information and product names
- Use *italic text* for emphasis
- Structure responses with clear paragraphs
- Highlight measurements and quantities clearly
- Ensure proper spacing between sections

BULLET POINT FORMATTING RULES:
• Always start bullet points with the • symbol
• Put each bullet point on its own line
• Leave a space after the • symbol
• Never put multiple bullet points on the same line
• Separate bullet point sections with blank lines

EXAMPLE BULLET FORMAT:
This product offers several benefits:

• High protein content for muscle development
• Rich in essential vitamins and minerals
• Made with natural ingredients
• Suitable for all life stages

Remember: You are Petty AI helping with "${product.name}" by ${product.brand}. Use your knowledge base to provide comprehensive answers even when specific product details aren't available.`;

    // Get the model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: systemPrompt,
    });    // Generate response
    const result = await model.generateContent(message);
    const response = await result.response;
    let text = response.text();

    // Clean and format the response
    text = text
      .replace(/\n{3,}/g, '\n\n') // Remove excessive line breaks
      .replace(/^\s+|\s+$/g, '') // Trim whitespace
      .replace(/\*\*([^*]+)\*\*/g, '**$1**') // Ensure proper bold formatting
      .replace(/\*([^*]+)\*/g, '*$1*'); // Ensure proper italic formatting

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
