# pyrefly: ignore [missing-import]
from pydantic import BaseModel

class BookingRequest(BaseModel):
    name: str
    phone: str
    email: str
    service: str
    date: str
    message: str = ""
