const getAccessToken = async () => {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    console.log('gettinga ccess token')
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
  
    return response.json();
  };


  export const topTracks = async () => {
    const { access_token } = await getAccessToken();
    console.log('huh');
    const response = await fetch("https://api.spotify.com/v1/artists/6xFrZbce9KH5APjBe4QVNa/albums?include_groups=album&limit=50", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { 
        revalidate: 86400 
      } 
    },
    );

    return response.json();
  };