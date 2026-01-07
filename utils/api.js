/**
 * Fetch profile data from API
 * @returns {Promise<Object>} Profile data
 */
export async function fetchProfile() {
  const API_URL = 'https://vip-reseller.co.id/api/profile';
  const API_KEY = 'JqXUxOvPwpUOZABY9yenm8vTl84MzcM7FmP4lFLweWH09iCqYc05wYRRYlHkKYG3';
  const API_SIGN = '56afdad7ace564e3f2cfec0e7d3188e3';

  // Prepare form data with URL encoding
  const formData = new URLSearchParams();
  formData.append('key', API_KEY);
  formData.append('sign', API_SIGN);

  try {
    console.log('Fetching profile from:', API_URL);
    console.log('Request body:', formData.toString());

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));

    // Return data even if result is false, so we can display the message
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

