import { NextResponse } from "next/server";
import { z } from "zod";
//import { newSubscriberHandler } from "./newSubscriber";

const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const emailValidation = EmailSchema.safeParse(body.email);
    console.log("Email validation:", emailValidation);

    if (!emailValidation.success) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = parseInt(process.env.BREVO_LIST_ID || "", 10) || 0;

    // Log environment variables (without sensitive data)
    console.log("Environment check:", {
      hasApiKey: !!BREVO_API_KEY,
      listId: LIST_ID,
      environment: process.env.NODE_ENV,
    });

    if (!BREVO_API_KEY) {
      console.error("Brevo API Key is missing");
      return NextResponse.json(
        { error: "Server configuration error: API Key is missing" },
        { status: 500 }
      );
    }

    if (!LIST_ID) {
      console.error("Brevo List ID is missing or invalid");
      return NextResponse.json(
        { error: "Server configuration error: List ID is missing or invalid" },
        { status: 500 }
      );
    }

    const url = "https://api.brevo.com/v3/contacts";
    const data = {
      email: emailValidation.data,
      listIds: [LIST_ID],
      updateEnabled: true,
    };

    console.log("Sending request to Brevo API...");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(data),
    });

    console.log("Brevo API Response Status:", response.status);

    let responseData;
    try {
      const text = await response.text();
      responseData = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error("Error parsing response:", e);
      responseData = {};
    }

    console.log("Brevo API Response:", responseData);

    if (response.status === 201) {
      //await newSubscriberHandler(req, res);
      return NextResponse.json(
        { message: "Successfully subscribed to the newsletter!" },
        { status: 201 }
      );
    } else if (response.status === 204) {
      return NextResponse.json(
        { message: "You're already subscribed! Thanks for your enthusiasm." },
        { status: 200 }
      );
    } else {
      console.error("Brevo API Error:", response.status, responseData);
      return NextResponse.json(
        {
          error: "An error occurred during subscription.",
          details: responseData.message || "Unknown error",
        },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("Error subscribing to Brevo:", error);
    return NextResponse.json(
      {
        error: "An error occurred during subscription.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
