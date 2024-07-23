// lib/fetchUserData.ts
export const fetchUserData = async (subdomain: string) => {
    const response = await fetch(`https://admin.mytherapist.ng/api/v1/user/therapists/public/${subdomain}`);
  
    if (response.status !== 200) {
      throw new Error("User data not found");
    }
  
    const userData = await response.json();
    return userData;
  };
  