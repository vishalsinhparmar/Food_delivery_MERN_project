export const Verifyemail = (value) => {
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegx.test(value);
  };
  
  export const passwordverify = (value) => {
    return value.length >= 6; // Minimum 6 characters
  };
  
  export const fileSizeverify = (file) => {
    return file && file.size <= 100000; // Ensure file exists and is <= 100KB
  };
  
  export const verifyUsername = (value) => {
    return value.length >= 3 && value.length <= 15; // Username between 3-15 characters
  };
  