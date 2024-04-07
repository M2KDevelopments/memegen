import * as memes from './res/meme.json';


/**
 * Get a list of all your meme options from API MEME - https://apimeme.com/?ref=apilist.fun
 * @returns A list of all your meme options
 */
export function getMemeOptions(): Array<String> {
    return memes;
}

/**
 * Get a link to the image of the generated meme API MEME - https://apimeme.com/?ref=apilist.fun
 * @returns URL to a meme image
 */
export function generate(meme: string | number, topText: string, bottomText: string): string {
    if (typeof meme === 'number') {
        return `https://apimeme.com/meme?meme=${getMemeOptions()[meme]}&top=${encodeURI(topText).replace(/\s/gmi, '+')}&bottom=${encodeURIComponent(bottomText).replace(/\s/gmi, '+')}`;
    }
    return `https://apimeme.com/meme?meme=${meme.replace(/\s/gmi, '-')}&top=${encodeURI(topText).replace(/\s/gmi, '+')}&bottom=${encodeURIComponent(bottomText).replace(/\s/gmi, '+')}`;
}
