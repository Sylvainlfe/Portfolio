
  export default async function getData(url) {
      try {
      const response = await fetch(import.meta.env.VITE_API_URL + url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  }