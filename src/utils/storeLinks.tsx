import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos.
export async function getLinksSave(key: string){

    const myLinks = await AsyncStorage.getItem(key)
    let linkSaves = JSON.parse(myLinks) || [];
    return linkSaves;
}

// Salvar um link no storage.
export async function saveLink(key: string, newlink: any) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newlink.id);

    if(hasLink){
        console.log('ESSE LINK JA EXISTE NA LISTA');
        return;
    }

    linksStored.push(newlink)
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
}

// Deletar algum link especifico.
export async function deleteLink(links:string, id: string) {
    
}