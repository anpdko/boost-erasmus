

const subText = (str: string, n: number): string => {
   // console.log(str)
   return str.length > n ? str.substring(0, n) + "..." : str;
}

const isPublisher = (bool: boolean) => bool ? 'published' : 'not published';

export { subText, isPublisher }