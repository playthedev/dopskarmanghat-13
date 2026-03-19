import { AdmissionPopupForm, AdmissionForm, ContactForm, ApiResponse } from '../types/forms';

const API_URL = 'https://discoveri-oaks-public-school-s4p9.vercel.app/api';

class ApiService {
  private async sendRequest(endpoint: string, data: any): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async submitAdmissionPopup(data: AdmissionPopupForm): Promise<ApiResponse> {
    return this.sendRequest('/forms/admission-popup', data);
  }

  async submitAdmission(data: AdmissionForm): Promise<ApiResponse> {
    return this.sendRequest('/forms/admission', data);
  }

  async submitContact(data: ContactForm): Promise<ApiResponse> {
    return this.sendRequest('/forms/contact', data);
  }
}

export const apiService = new ApiService(); 
