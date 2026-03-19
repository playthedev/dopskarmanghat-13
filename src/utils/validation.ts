export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (data.hasOwnProperty('phone') && !validatePhone(data.phone)) {
    errors.push('Please enter a valid 10-digit phone number');
  }

  if (data.hasOwnProperty('email') && !validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string' && !value.trim()) {
      errors.push(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}; 