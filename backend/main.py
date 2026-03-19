from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import resend
import json

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Resend
resend.api_key = "re_39nJz3rg_E8k7iP4evRrmfrGX1S2zgVvz"

# Simple response model
class ApiResponse(BaseModel):
    success: bool
    message: str

@app.post("/api/submit-form")
async def submit_form(data: dict):
    try:
        # Format the data for email
        email_content = json.dumps(data, indent=2)
        
        # Get form type for subject
        form_type = data.get('formType', 'General')
        
        params = {
            "from": "Discoveri Oaks <onboarding@resend.dev>",  # Using Resend's default domain
            "to": "discoveryoks@gmail.com",
            "subject": f"New {form_type.title()} Form Submission",
            "text": email_content
        }
        
        # Send email using resend
        response = resend.Emails.send(params)
        print("Email sent:", response)  # Debug log
        
        return ApiResponse(success=True, message="Form submitted successfully")
    except Exception as e:
        print("Error sending email:", str(e))  # Debug log
        raise HTTPException(
            status_code=500, 
            detail={"success": False, "message": "Failed to send email. Please try again."}
        ) 
