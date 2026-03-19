export interface AdmissionPopupForm {
  name: string;
  phone: string;
  email: string;
  childName: string;
  grade: string;
}

export interface AdmissionForm {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  address: string;
  agreeToTerms: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
} 