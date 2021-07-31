

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=k5ANkoJ8oCrIk72ln0Zpq9r4790MZ9Q7`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(imgs => {
        return {
            id: imgs.id,
            title: imgs.title,
            url: imgs.images?.downsized_medium.url
        }
    })
    return gifs;
}