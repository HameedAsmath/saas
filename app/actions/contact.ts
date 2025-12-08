"use server";

type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxgiMVX2UXhmxONrcN2Oh2_3eOH4NHs5DvR_d7xSuwDEaTq0Upuwv3cB7wE46VZgClk/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company_name: company,
          subject,
          message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return {
      success: true,
      message:
        "Thank you! We've received your message and will get back to you shortly.",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
