/** Primitive function for find value in array by key */
export const findValueByKey = (array: any, key: any) => {
    if (array && key in array && array[key] !== "") {
        return array[key];
    }
    return null;
}

/**
* Odstráni všetky medzery z reťazca.
* @param input - Vstupný reťazec, z ktorého sa majú odstrániť medzery.
* @returns Nový reťazec bez medzier.
*/
export function removeSpaces(input: string): string {
   return input.replace(/\s+/g, ''); // Odstráni všetky medzery
}