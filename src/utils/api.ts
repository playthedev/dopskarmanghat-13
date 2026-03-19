const API_URL = 'https://dopskarmanghat-backend-13.vercel.app';

interface ApiResponse {
  success: boolean;
  message: string;
}

export const submitForm = async <T>(formType: string, formData: T): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        ...formData,
        timestamp: new Date().toISOString(), // Add timestamp for tracking
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail?.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}; 
