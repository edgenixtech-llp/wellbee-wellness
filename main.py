# pyrefly: ignore [missing-import]
from fastapi import FastAPI
# pyrefly: ignore [missing-import]
from fastapi.middleware.cors import CORSMiddleware
from models import BookingRequest

app = FastAPI()
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"], 
    allow_methods=["*"], 
    allow_headers=["*"]
)

@app.post("/api/book")
async def book_appointment(data: BookingRequest):
    # Save to DB or send email (extend as needed)
    return {
        "status": "success", 
        "message": f"Thank you {data.name}, your request for {data.service} on {data.date} has been received. We'll confirm shortly!"
    }
